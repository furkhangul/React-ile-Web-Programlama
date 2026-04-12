import {useState} from "react"


function Deneme(){
    const [deneme, setDeneme] = useState("");
    return(
        <div>
            <center>
            {/*
            PreventDefault: Bu fonksiyon tarayıcının otomatik olarak yaptığı davranışları engeller.
            Tarayıcılar bazı eventlarda kendi kendine yaptığı hazır davranışlar vardır.

            Örnek olacak olursa:
            <form> ifadesi sürekli sayfayı yeniler.
            <href> başka sayfaya yönlendirir.

            ama bu davranışları her zaman kullanmak istemeyiz.



            Aşağıdaki örnekte normalde linke basıldığı zaman google'a gitmesi gerekiyor fakat biz bunu engellemiş oluyoruz
            */}
            <a href="google.com" onClick={(e)=>{
                e.preventDefault();
                alert("Gitmesine izin verilmedi !")
                }}>
                Google'a git
            </a>



                <br /><br /><br /><br />

            {/*
            Veya bir form sitesinden örnek verecek olursak: 
            Form sayfaları sürekli kendini yeniler bunu durdurmak istiyoruz.
            Enter tuşuna basarsak bile yazdığımız yazı gitmeyecek
            */}
            <form onSubmit={(e)=>{
                e.preventDefault();
            }}>
                <input type="text" placeholder="isminiz" onChange={(e)=>{setDeneme(e.target.value);}} />
            </form>
            <h1>Yazdığınız değer: {deneme}</h1>





            
            </center>
        </div>
    )
}

export default Deneme;
