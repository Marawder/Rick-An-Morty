let coin = document.querySelector(".coin");

coin.addEventListener("click",function(){
console.log("clicked");
let randomindex = Math.floor(Math.random()*coins.length);
console.log(randomindex);
if (randomindex === 0) {
    coin.src="./Gif/heads.gif";
} else {
    coin.src="./Gif/tails.gif";;
}
});


//if (randomindex === 0) {
 //   classList.toggle("positive:active");
//} else {
//    classList.toggle("negative:active");
//}