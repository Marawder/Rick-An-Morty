let coin = document.querySelector(".coin");
let input = document.querySelector(".result");
let resultaudio = document.querySelector(".resultaudio");
let coinFlip = document.querySelector(".coin_flip")


coin.addEventListener("click",function(){
let randomindex = Math.floor(Math.random()*coins.length); // her går den ind i data og kigger på coins items og sætter det i index
console.log(randomindex);
coinFlip.play();

if (randomindex === 0) {
    coin.src="./Gif/heads.gif";
   setTimeout(function(){                     // her sættes der en timer på hvornår denne anonyme funktion skal starte.
    let posi = Math.floor(Math.random()*pos.length);   // her laves der index på positive elementer og gemmes i posi
    console.log(posi);
    input.src= pos[posi].image;    // her bliver input i HTML givet en source fra pos array, med argument posi index tal
    resultaudio.src = pos[posi].sound;  // her bliver resultaudio givet en source fra pos array med argument posi index tal
    onmousedown=resultaudio.play();  // her klargøres det at funktionen on click i funktion = resultaudio variable og givet play funktion.
   }, 3000);
} else {
    coin.src="./Gif/tails.gif";
    setTimeout(function(){
        let negi = Math.floor(Math.random()*neg.length);
    console.log(negi);
    input.src=neg[negi].image;
    resultaudio.src = neg[negi].sound;
    onmousedown=resultaudio.play(); 
    }, 3000);
    
}
});
