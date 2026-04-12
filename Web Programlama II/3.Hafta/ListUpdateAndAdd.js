Liste = [
    {ad:"Furkan", soyad:"Gül"},
    {ad:"Bilal", soyad:"Şahan"},
    {ad:"Kenan", soyad:"Şen"}
]

const aktar = document.getElementById("Ekle");

function Listele(){
    setTimeout(()=>{
        let eklenecek = ``;

        Liste.forEach((x)=>{
            eklenecek += `
            <ul>
                <li> ${x.ad} ${x.soyad} </li>
            </ul>

            `
        });
        
        aktar.innerHTML = eklenecek;
    },2000)    
}


Listele();
