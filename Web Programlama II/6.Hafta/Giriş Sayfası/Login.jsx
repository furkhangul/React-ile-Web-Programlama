import {useState} from "react"
import "bootstrap/dist/css/bootstrap.min.css"
function Login(){

    const[name, setName] = useState("");
    const[surname, setSurname] = useState("");
    const[login, setLogin] = useState(false)
    return(
    <div class="m-5 p-5">
        <center>
            <h3 class="display-6">Login Page</h3>
        <form >
            <input type="text" class="form-control" placeholder="Name" onChange={(x) => {
                setName(x.target.value)
            }}/>
            <input type="text"  class="form-control" placeholder="Surname" onChange={(x)=>{
                setSurname(x.target.value)
            }}/>
            <input type="submit" class="btn btn-primary" value="Show" onClick={() => {
                setLogin(true)
            }} />
        </form><br/><br/>
                <dic class="display-6">Hoş Geldin {name} {surname}</dic>
        </center>

    </div>


    )
}

export default Login
