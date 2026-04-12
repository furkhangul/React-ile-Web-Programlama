import {useState} from "react"

function Deneme(){
    const [isim, setIsim] = useState("");
    const [soyisim, setSoyisim] = useState("");
    const [giris, setGiris] = useState(false);
    const [hata, setHata] = useState("");
    return(
        <center>
           <form onSubmit={(e)=>e.preventDefault()}>
            <input type="text" placeholder="isim" onChange={(e)=>{setIsim(e.target.value)}} />
            <input type="text" placeholder="soyisim" onChange={(e)=>{setSoyisim(e.target.value)}} />
            <button onClick={()=>{
                if(isim.length<3 || soyisim.length<3){
                    setHata("Girdiğiniz isim veya soyisim hatalıdır !");
                    setGiris(false);
                }
                else{
                    setHata("");
                    setGiris(true);
                }
                }}>Ekle</button>
            </form> 
            {giris && <h6 style={{color:"green"}}>Hoşgeldin {isim} {soyisim}</h6>}
            <h6 style={{color:"red"}}>{hata}</h6>
        </center>
    )
}

export default Deneme
