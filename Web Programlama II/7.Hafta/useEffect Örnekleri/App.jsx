import React, { useEffect, useState} from "react";
import "bootstrap/dist/css/bootstrap.min.css"
function App(){
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
        <div className="m-5 p-5">
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
        </div>
    )
}

export default App;
