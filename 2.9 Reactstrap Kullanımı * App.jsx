import React, { Component } from "react"
import Giris from "./Components/Giris"
import Header from "./Components/Header"
import Product from "./Components/Product"
import Category from "./Components/Category"
 
import { Container, Row } from "reactstrap"

export default class App extends Component{
    render(){
        return(
            <div>
              <Container>
                <Row xs="12" color="danger">
                  <Giris />
                </Row>
                <Row xs="9">
                  <Header />
                </Row>
                <Row xs="3">
                  <Category />
                </Row>
                <Row xs="5" bg-primary>
                  <Product />
                </Row>                
              </Container>
            </div>
        )
    }
}
