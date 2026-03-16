import React, { Component } from "react"
import CategoryList from "./Category"
import Paragraf from "./Paragraf"
import Navigation  from "./Navigation"

export default class App extends Component{
    render(){
        return(
            <div>
                <CategoryList />
                <Paragraf />
                <Navigation/>
            </div>
        )
    }
}
