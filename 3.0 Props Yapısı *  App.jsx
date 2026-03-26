import React, { Component } from "react"
import Header from "./Components/Header"
 
import { Container, Row } from "reactstrap"

export default class App extends Component{
    render(){
        return(
          <>
                <Header title="FurOfTheWeak"/>
                <Header descript="For Everyone"/>
          </>
        )
    }
}
