import {useState} from "react"


function Deneme(){
    const [deneme, setDeneme] = useState("");
    return(
        <div>
            <center>
                {/*
                StopPropagation:
                Bu fonksiyon bir olay gerçekleştiğinde, bu olayın başka elementlere yayılmasını durdurur.

                Mesela elimizde bir buton var ve bu buton bir div içerisinde eğer ben butona basarsam javascript yukarıdan aşağıya doğru
                çalıştığından dolayı bu div de bu tıklanmadan etkilenir.
                Örnek verecek olursam:

                Örnekte butona basıldığı zaman aslında
                BUTON
                ORTA DIV
                BÜYÜK DIV

                şeklinde çalışır.

                */}

                <div onClick={() => console.log("BÜYÜK DIV")}>
                    <div onClick={() => console.log("ORTA DIV")}>
                        <button onClick={() => console.log("BUTON")}>
                        İlk Örnek
                        </button>
                    </div>
                </div>


                    <br /><br /><br /><br />

                {/*
                    Fakat eğer stopPropagation fonksiyonunu kullanırsak yalnızca Buton logu çalışacaktır.
                */}
                 <div onClick={() => console.log("BÜYÜK DIV")}>
                    <div onClick={() => console.log("ORTA DIV")}>
                        <button onClick={(e) =>{
                            e.stopPropagation();
                            console.log("BUTON")
                            }}>
                        İkinci Örnek
                        </button>
                    </div>
                </div>
            </center>
        </div>
    )
}

export default Deneme;
