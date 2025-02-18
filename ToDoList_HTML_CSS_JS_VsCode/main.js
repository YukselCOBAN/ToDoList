let addBtn=document.getElementById("addButon"); /*html kodlarının içindeki id'si addButon olan butonuburaya ekledik.*/
let inputField=document.getElementById("inputField"); 
let todoContainer=document.getElementById("todoContainer"); 

addBtn.addEventListener("click",()=>{  /*Fonksiyon oluşturduk.*/
/*console.log("add btn") : bunu konsolda ,butona tıklandıgında iş görüyor mu diye inceleye tıklayıp gördük tarayıcıda*/
    var paragraf=document.createElement("li");
    /*console.log(paragraf); bunu da li oluşmuş mu diye aynı şekilde konsolda kontrol etmek için yazdık.*/

    paragraf.innerHTML=inputField.value; /*Paragrafın değeri inputField'ten gelen değer olsun.*/
    /*console.log(paragraf); li içine texte yazdıgın sey geliyor mu diye kontrol ettik.*/
    todoContainer.appendChild(paragraf); /*container'e cocugunu ekledık yanı paragrafı,yanı yazan seyi,tıklanınca ekle butonuna yazar container'e*/ 
})
