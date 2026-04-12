function Deneme(){
  
    return(
        <div>
            <center>

            {/*
            onClick: Kullanıcının bir elemana (buton,div,yazı) tıkladığı zaman çalışacak olan fonksiyonu tanımlamak için kullanılır.
            Örnekte her butona basıldığında onClick çalışıyor uyarı kutusu gelecek.
            */}
            <h6>onClick Event</h6>
            <input type="submit" value="Deneme" onClick={()=>{alert("onClick çalıştı.");}} />


            {/*
            onChange: Bir form elemanının (input, textarea, select) değeri değiştiğinde çalışan eventtir.
            Örnekte input değeri içerisine bir şey girildiği anda alert çalıştı
            */}
            <h6>onChange Event</h6>
            <input type="text" onChange={()=>{alert("OnChange çalıştı")}}/>


            {/*
            onBlur: Bu event ise mesela bir kullanıcı input değeri girdi bir şey olmaz ama başka bir şeye bastığı anda tetiklenir.
            Yani bir yere odaklanır eğer başka yere odaklanırsan bu event devreye girer.
            Örnekte input değeri giriliyor fakat  başka bir şeye bastığımız zaman fonksiyonumuz tetikleniyor.
            */}
            <h6>onBlur Event</h6>
            <input type="text"  onBlur={()=>{alert("Odak gitti")}} / >

            {/*
            onFocus: Kullanıcı bu elemana dokunduğu anda aktive edilir. Mesela bir input değeri var buna bir şey girmesine gerek yok bastığı anda bu
            evet çalışmaya başlar.
            Örnekte: Basıldığı anda alert çıkıyor.
            */}
            <h6>onFocus Event</h6>
            <input type="text"  onFocus={()=>{alert("onFocus fonksiyonunu çalıştırdın !")}} / >

            </center>
        </div>
    )
}

export default Deneme;
