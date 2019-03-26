/*
  Tasks
  1) Speed variable
  Replace the value 20 with a variable called "speed". 
  This value dictates how many pixels will move each time.

*/
const boost = [document.querySelector('#morty'), document.querySelector('#snowball'), document.querySelector('#sun'), document.querySelector('#portal'), document.querySelector('#mr')];
const pacman = document.querySelector('#pickle');
const up = document.querySelector('#up');
const down = document.querySelector('#down');
const right = document.querySelector('#right');
const left = document.querySelector('#left');
const buttons = document.querySelectorAll('.buttons');
var currentElement;
var isMoving = false;
 

/*function start() {
    console.log("starting the program");
    for (let i = 0; i<buttons.length; i++){
      buttons[i].addEventListener('click', function(){
        switch(buttons[i]) {
        case up: 
            move('up');
            break;

        case down: 
            move('down');
            break;

        case right: 
            move('right');
            break;

        case left: 
            move('left');
            break;
        }  
    });
}
}   */ 
    
function start() {
    console.log("starting the program");
    for (let i = 0; i<buttons.length; i++){

      buttons[i].addEventListener('click', function(){

       
        switch(buttons[i]) {
        case up: 
            move('up');
            break;

        case down: 
            move('down');
            break;

        case right: 
            move('right');
            break;

        case left: 
            move('left');
            break;
        }
    
    })  
    }
    
  

};



var speed = 20;

function move(direction) {

    // get total size of window
    let windowWidth = window.innerWidth;
    let windowHeight = window.innerHeight;

    // get current placement
    let currentLeft = getLeftValue();
    let currentTop = getTopValue();

    // MOVING RIGHT
    if(direction === "right") {
        pacman.style.transform = "scaleX(1)";
        // check if pacman is at most right position
        if (currentLeft >= windowWidth - 75) {
            console.log("pacman can't move further right");
        } else {
            pacman.style.left = currentLeft + speed + "px";
            console.log("move to left: "+getLeftValue());
        }
    // MOVING LEFT
    } else if (direction === "left") {
        pacman.style.transform = "scaleX(-1)";
        // check if pacman is at most left position
        if (currentLeft < speed) {
            console.log("pacman can't move further left");
        } else {
            pacman.style.left = currentLeft - speed + "px";
            console.log("move to left: "+getLeftValue());
        }
    } else if (direction === "up") {
        pacman.style.transform = "rotate(-90deg)";
        if (currentTop < speed) {
            console.log("pacman can't move further up");
        } else {
            pacman.style.top = currentTop - speed + "px";
            console.log("move to top: "+getTopValue());
        }
    } else if (direction === "down") {
        pacman.style.transform = "rotate(90deg)";
        if (currentTop >= windowHeight -75) {
            console.log("pacman can't move further down");
        } else {
            pacman.style.top = currentTop + speed + "px";
            console.log("move to top: "+getTopValue());
        }
    }
// check collision
checkCollision();
    
}

 

function getLeftValue() {
    // get the current value for left and return as an integer number
    return Number(window.getComputedStyle(pacman)["left"].replace("px",""));
}
function getTopValue() {
    // get the current value for left and return as an integer number
    return Number(window.getComputedStyle(pacman)["top"].replace("px",""));
}

function isCollide(a, b) {
    var aRect = a.getBoundingClientRect();
    var bRect = b.getBoundingClientRect();

    return !(
        ((aRect.top + aRect.height) < (bRect.top)) ||
        (aRect.top > (bRect.top + bRect.height)) ||
        ((aRect.left + aRect.width) < bRect.left) ||
        (aRect.left > (bRect.left + bRect.width))
    );
}

function checkCollision() {
    for(var i =0; i<boost.length; i++){
    console.log(boost[i]);
    if (isCollide(pacman, boost[i]) === true) {
       currentElement = boost[i];
       animate(); 
    }     
}
    //console.log(isCollide(pacman, boost));
}

function animate() {
    TweenMax.to(currentElement, 0.5, {opacity:0, scale:30, ease: Power4.easeOut, clearProps:"opacity,scale",onComplete: newposition});
}


function newposition() {
    console.log('helo')
    currentElement.style.top = getRandomTop();
    currentElement.style.left = getRandomLeft();
}

// return a random px value within the height of the window
function getRandomTop() {
    return Math.floor((Math.random() * window.innerHeight) + 1) + "px";
}
// returns a random left value, within the width of the window
function getRandomLeft() {
    return Math.floor((Math.random() * window.innerWidth) + 1) + "px";
}


// Collision test
// source: https://stackoverflow.com/a/35974082
