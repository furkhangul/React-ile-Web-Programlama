import { useEffect, useState} from "react";

function Deneme(){
    const [name, setName] = useState("Furkan");
    const[surname, setSurname] = useState("Gül");

    useEffect(()=>{
        console.log("Bu fonksiyon bir değişiklik olursa çalışır.");
    });
    useEffect(()=>{
        console.log("Bu fonksiyon sayfa ilk yüklendiğinde çalışır.");
    }, []);
    useEffect(()=>{
        console.log("Bu fonksiyon sayfa ilk yüklendiğinde ve name state'i değiştiğinde çalışır.");
    }, [name]);
    useEffect(()=>{
        console.log("Bu fonksiyon sayfa ilk yüklendiğinde ve surname state'i değiştiğinde çalışır.");
    }, [surname]);
    useEffect(()=>{
        console.log("Bu fonksiyon sayfa ilk yüklendiğinde, name veya surname stateleri değiştiğinde çalışır.");
    }, [name,surname]);
    return(
            <center>
                <h1>
                    {name} {surname}
                </h1>
                <button className="btn btn-primary m-1" onClick={()=>{
                    setName("Kemal")
                }}>Change Name</button><br />
                <button className="btn btn-primary" onClick={()=>{
                    setSurname("Şahin")
                }}>Change Surname</button>

            </center>
    )
}

export default Deneme;
