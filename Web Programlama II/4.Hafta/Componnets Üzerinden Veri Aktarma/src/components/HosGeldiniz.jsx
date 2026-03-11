import React from "react"

function HosGeldiniz(){
    return(
        <>
            <center>
                <h1>Hoşgeldin</h1>
            </center>
        </>
    )
}

function HG(props){
    return(
        <>
            <div>Hoşgeldin {props.name}</div> 
        </>
    )
}
export {HosGeldiniz, HG}