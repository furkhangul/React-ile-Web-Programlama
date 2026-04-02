import {useState} from "react"
import "bootstrap/dist/css/bootstrap.min.css"

function Login(){
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [login, setLogin] = useState(false);
    const [error, setError] = useState("");
    return(
        <div className="m-5 p-5">
            <center>
                    <div className="display-7 text-warning">{error}</div>
                    <br />
                    <br />
                    <form>
                    <input className="form-control" type="text" placeholder="Username"  onChange={(e)=>{
                        setUsername(e.target.value)
                    }}/><br />
                    <input type="password" className="form-control" placeholder="Password" onChange={(e) =>{
                        setPassword(e.target.value)
                    }} /><br />
                    <input type="submit" className="btn btn-primary" value="Login" onClick={(x)=>{
                        if(username.length <=2 || password.length <=2){
                            x.preventDefault(); //Bu özellik ile sayfa sürekli yenilenmeyi bırakır.
                            setLogin(false)
                            setError("Name and Surname cannot be less than 3 character long");
                        }
                        else{
                            setLogin(true)
                            setError("")
                        }

                    }}/> 
                    </form>
                    <br />
                    <br />
                    {login && <div className="display-7"><b>Username:</b> {username}<br/><b>Password: </b>{password}</div>}
            </center> 
        </div>
    )
}

export default Login
