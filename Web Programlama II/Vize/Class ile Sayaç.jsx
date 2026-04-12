import React,{Component} from "react"

export default class Deneme extends Component{
    //Sınıflar kullanılarak sayaç yapılmış. Bu sayaç fonksiyon ile oluşturulmadığından bir useState'e ihtiyaç duymaz.
    //Classlar kendi içinde oluşturulmuş nesneleri this... olarak çağırmaktadır.
    

    
    state = {
        sayac : 0
    };

    render(){
        return(
            <center>
                <h3>Sayaç Değeri : {this.state.sayac}</h3>
                <button onClick={()=>this.setState({
                    sayac: this.state.sayac + 1
                })}>
                    Ekle
                </button>
            </center>
        )
    }
}
