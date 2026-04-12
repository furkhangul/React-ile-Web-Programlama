/*
Herhangi bir state değeri değiştiğinde console ekranına "bir state'in değeri değişti.",
sayı state'inin değeri değiştiğinde "sayı state değeri değişti." ve herhangi bir component ekrandan kalktığında "component kaldırıldı."
yazan React kodlarını yazınız.
*/
import {useState, useEffect} from "react"

function App(){
    const  [sayi, setSayi] = useState(0);

    useEffect(()=>{
        console.log("Herhangi bir state değeri değişti.");
    });
    useEffect(()=>{
        console.log("Sayi state değeri değişti.");
    }, [sayi]);
    useEffect(()=>{
        return() => {
            console.log("Component kaldırıldı !");
        }
    },[])
    useEffect()
    return(
        <>

        </>
    )
}


export default App;
