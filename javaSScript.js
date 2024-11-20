let button = document.getElementById("buton");
let renkler = ["1","2","3","4","5","6","7","8","9","A","B","C","D","E","F"];

function renklerr(){
  let k = '#';
    let başlık = document.getElementById("Başlık");

   for(let i=0;i<6;i++){
    let randomlar =Math.floor(Math.random()*renkler.length)
     k += renkler[randomlar];
    
   }
   başlık.style.color=k;
   console.log("Merhaba");
   console.log("Rengimiz:"+k);
   console.log ("k")
}


