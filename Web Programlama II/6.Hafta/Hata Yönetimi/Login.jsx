import {useState} from "react"
import "bootstrap/dist/css/bootstrap.min.css"
function Login(){

    const[name, setName] = useState("");
    const[surname, setSurname] = useState("");
    const[login, setLogin] = useState(false);
    const[error , setError] = useState("");
    return(
    <div class="m-5 p-5">
        <center>
            <h6 class="text-danger">{error}</h6>
            <br></br>
            <br></br>
            <h3 class="display-6">Login Page</h3>
            <input type="text" class="form-control" placeholder="Name" onChange={(x) => {
                setName(x.target.value)
            }}/>
            <input type="text"  class="form-control" placeholder="Surname" onChange={(x)=>{
                setSurname(x.target.value)
            }}/>
            <input type="submit" class="btn btn-primary" value="Show" onClick={(x) =>{
                x.preventDefault();
                if(name.length <= 2 || surname.length <= 2){
                    setError("Name or Surname cannot be less than 3 characters long.")
                    setLogin(false)
                }
                else{
                    setError("");
                    setLogin(true)
                }
            }} />
        <br/><br/>
             {login && <div class="display-6">Hoş Geldin {name} {surname}</div> }   
        </center>
    </div>


    )
}

export default Login
