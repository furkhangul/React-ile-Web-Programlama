function TekCift(sayi){
    return new Promise((resolve, reject)=>{
        if(sayi %2 == 0){
            resolve(sayi -2)
        }
        else{
            reject("Çift değil.")
        }
    })
}

function Karesi(sayi){
    return new Promise((resolve)=>{
        resolve(sayi * sayi)
    })
}

const sayi = 10

TekCift(sayi)
    .then((sonuc) => {
        console.log("İşlenen sayı:", sonuc);
        return Karesi(sonuc);
    })
    .then((kare) => {
        console.log("Sayının karesi:", kare);
    })
    .catch((hata) => {
        console.log(hata);
    });
