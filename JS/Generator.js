let coin = document.querySelector(".coin");
let input = document.querySelector(".result");
let resultaudio = document.querySelector(".resultaudio");

coin.addEventListener("click",function(){
console.log("clicked");
let randomindex = Math.floor(Math.random()*coins.length);
console.log(randomindex);
if (randomindex === 0) {
    coin.src="./Gif/heads.gif";
   setTimeout(function(){
    let posi = Math.floor(Math.random()*pos.length);
    console.log(posi);
    input.src= pos[posi].image;
    resultaudio.src = pos[posi].sound;
    onmousedown=resultaudio.play();
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

//coin.addEventListener("click",function(){
//
//    if (randomindex === 0) {
//        console.log("positive");
//    } else {
//        console.log("Negative");
//    }
//    });




//coin.addEventListener("click",function(){
//if (randomindex === 0) {
//   input.src="";
//} else {
//    input.src="";
//}
//});