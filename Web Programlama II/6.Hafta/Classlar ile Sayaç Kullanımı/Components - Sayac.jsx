import "bootstrap/dist/css/bootstrap.min.css"
import React,{ Component } from "react"
export default class Sayac extends Component{
    state = {
        sayac : 0
    }

    render(){
        return(
            <div class="p-3 m-5">
                <center>
                <h3 class="display-5">Counter Value : {this.state.sayac}</h3>
                <button  class="btn btn-secondary" onClick={() =>{
                    this.setState({
                        sayac : this.state.sayac + 1 
                    })
                }}>
                    Plus
                </button>
                </center>
            </div>
        )
    }
}
