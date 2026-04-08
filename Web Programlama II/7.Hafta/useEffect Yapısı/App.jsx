import React, { useEffect, useState} from "react";
import "bootstrap/dist/css/bootstrap.min.css"
function App(){
    const [name, setName] = useState("Furkan");
    const[surname, setSurname] = useState("Gül");

    useEffect(()=>{
        console.log("Bu fonksiyon hiçbir şey çalışmazsa bile çalışır.");
    });
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
