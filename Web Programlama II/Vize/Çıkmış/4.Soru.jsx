
/*
React'ta bir functional component oluşturun. Bu component, bir input alanı alacak ve bu alana girilen artış miktarını kullanıcıdan alacak.
Kullanıcı her butona tıkladığında, bu artış miktarı kadar tıklama sayısına eklenecek ve sonuç div içinde gösterilecektir.
Kullanıcı sayı dışında bir değer girerse (isNaN(string) methodu ile bunu kontrol edebilirsiniz) artış miktarı varsayılan olarak 1 (bir) kabul edilecektir.
*/

import {useState} from "react";
function Deneme(){
    const [deger, setDeger] = useState("");
    const [sayac, setSayac] = useState(0);
    return(
    <>
        <input type="text" placeholder="değer giriniz " onChange={(e)=>{setDeger(e.target.value)}}/>
        <button onClick={()=>{
            if(!(isNaN(deger)) && deger !==""){
                setSayac(sayac+1);

            }
            else{
                setDeger("");
            }
        }}>Arttır</button>

        <h5>Sayaç Değeri : {sayac}</h5>
    </>
    )
}
export default Deneme;
