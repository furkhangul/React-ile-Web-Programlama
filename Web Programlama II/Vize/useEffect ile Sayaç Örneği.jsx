import React, { useEffect, useState} from "react";
import "bootstrap/dist/css/bootstrap.min.css"


function App(){
    const [name,setName] = useState("Furkan Gül")
    return(
        <div className="m-5 p-5">
            <center>
            <h1>{name}</h1>
            <button className="btn btn-primary" onClick={()=>{
                setName("Marko Asensio");
            }}>Change Name</button>
            {name === "Furkan Gül" ?  <CounterFunction /> : null}
            </center> 
        </div>

    )
}


function CounterFunction(){
    const [counter, setCounter] = useState(0);
    useEffect(()=>{
        console.log("Number changed.");
        console.log("Number: " + counter);
    },[counter]);
    useEffect(()=>{
        return(
            console.log("")
        )
    });
    return(
                <div className="m-5 p-5">
            <center>
                <h1>
                    {counter}
                </h1>
                <br />
                <button className="btn btn-primary" onClick={()=>{
                    setCounter(Math.floor(Math.random() * 100))
                }}>
                    Change Number   
                </button> 
            </center>
        </div>
    )
}
export default App;
