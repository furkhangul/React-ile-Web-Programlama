import {useState} from "react"
import "bootstrap/dist/css/bootstrap.min.css"
function Sayac(){
    const [Sayac, setSayac] = useState(0)
    return(
        <div class="p-3 m-5">  
            <center>
            <h3>Counter Value: {Sayac}</h3>
            <br></br>
            <button class="btn btn-primary" onClick={() =>{
                setSayac(Sayac + 1);
            }}>
                Up
            </button>
            </center>
        </div>
    )
}
export default Sayac;
