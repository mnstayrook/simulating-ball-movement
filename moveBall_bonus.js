// Code for 'ball' - Green

var velocityX = 75;          
var velocityY = 25;
var positionX = 105; 
var positionY = 255;
var reverseX = false;
var reverseY = false;
var ball = document.getElementById('ball');
var minX = 100;                        
var minY = 250;
var maxX = 1000;                    
var maxY = 700;


function moveBall() {
  // X Axis Movement
  if (reverseX) {
    positionX = positionX + velocityX;
    ball.style.left = positionX + 'px';
  } else {                                 
    positionX = positionX - velocityX;
    ball.style.left = positionX + 'px';
  }
  // Y Axis Movement
  if (reverseY) {
    positionY = positionY + velocityY;
    ball.style.top = positionY + 'px';
  } else {                                 
    positionY = positionY - velocityY;
    ball.style.top = positionY + 'px';
  }
  
 // Reversing Direction
  if (positionX > maxX || positionX <= minX) { 
    reverseX = !reverseX;
  } 
  if (positionY > maxY || positionY <= minY) {
    reverseY = !reverseY;
  } 
}

// Code for 'ball2' - Orange

var velocityX2 = 54;          
var velocityY2 = 38;
var positionX2 = 105; 
var positionY2 = 255;
var reverseX2 = false;
var reverseY2 = false;
var ball2 = document.getElementById('ball2');
var minX2 = 100;                        
var minY2 = 250;
var maxX2 = 1000;                    
var maxY2 = 700;

function moveBall2() {
  // X Axis Movement
  if (reverseX2) {
    positionX2 = positionX2 + velocityX2;
    ball2.style.left = positionX2 + 'px';
  } else {                                 
    positionX2 = positionX2 - velocityX2;
    ball2.style.left = positionX2 + 'px';
  }
  // Y Axis Movement
  if (reverseY2) {
    positionY2 = positionY2 + velocityY2;
    ball2.style.top = positionY2 + 'px';
  } else {                                 
    positionY2 = positionY2 - velocityY2;
    ball2.style.top = positionY2 + 'px';
  }
  
 // Reversing Direction
  if (positionX2 > maxX2 || positionX2 <= minX2) { 
    reverseX2 = !reverseX2;
  } 
  if (positionY2 > maxY2 || positionY2 <= minY2) {
    reverseY2 = !reverseY2;
  } 
}

// Code for 'ball3' - Purple

var velocityX3 = 75;          
var velocityY3 = 25;
var positionX3 = 105; 
var positionY3 = 255;
var reverseX3 = false;
var reverseY3 = false;
var ball3 = document.getElementById('ball3');
var minX3 = 100;                        
var minY3 = 250;
var maxX3 = 1000;                    
var maxY3 = 700;

function moveBall3() {
  // X Axis Movement
  if (reverseX3) {
    positionX3 = positionX3 + velocityX3;
    ball3.style.left = positionX3 + 'px';
  } else {                                 
    positionX3 = positionX3 - velocityX3;
    ball3.style.left = positionX3 + 'px';
  }
  // Y Axis Movement
  if (reverseY3) {
    positionY3 = positionY3 + velocityY3;
    ball3.style.top = positionY3 + 'px';
  } else {                                 
    positionY3 = positionY3 - velocityY3;
    ball3.style.top = positionY3 + 'px';
}
  
 // Reversing Direction
  if (positionX3 > maxX3 || positionX3 <= minX3) { 
    reverseX3 = !reverseX3;
  } 
  if (positionY3 > maxY3 || positionY3 <= minY3) {
    reverseY3 = !reverseY3;
  } 
}

// Code for 'ball4' - Red

var velocityX4 = 23;          
var velocityY4 = 32;
var positionX4 = 105; 
var positionY4 = 255;
var reverseX4 = false;
var reverseY4 = false;
var ball4 = document.getElementById('ball4');
var minX4 = 100;                        
var minY4 = 250;
var maxX4 = 1000;                    
var maxY4 = 700;

function moveBall4() {
  // X Axis Movement
  if (reverseX4) {
    positionX4 = positionX4 + velocityX4;
    ball4.style.left = positionX4 + 'px';
  } else {                                 
    positionX4 = positionX4 - velocityX4;
    ball4.style.left = positionX4 + 'px';
  }
  // Y Axis Movement
  if (reverseY4) {
    positionY4 = positionY4 + velocityY4;
    ball4.style.top = positionY4 + 'px';
  } else {                                 
    positionY4 = positionY4 - velocityY4;
    ball4.style.top = positionY4 + 'px';
  }
  
 // Reversing Direction
  if (positionX4 > maxX4 || positionX4 <= minX4) { 
    reverseX4 = !reverseX4;
  } 
  if (positionY4 > maxY4 || positionY4 <= minY4) {
    reverseY4 = !reverseY4;
  } 
}

// Code for 'ball5' - Blue

var velocityX5 = 25;          
var velocityY5 = 75;
var positionX5 = 105; 
var positionY5 = 255;
var reverseX5 = false;
var reverseY5 = false;
var ball5 = document.getElementById('ball5');
var minX5 = 100;                        
var minY5 = 250;
var maxX5 = 1000;                    
var maxY5 = 700;

function moveBall5() {
  // X Axis Movement
  if (reverseX5) {
    positionX5 = positionX5 + velocityX5;
    ball5.style.left = positionX5 + 'px';
  } else {                                 
    positionX5 = positionX5 - velocityX5;
    ball5.style.left = positionX5 + 'px';
  }
  // Y Axis Movement
  if (reverseY5) {
    positionY5 = positionY5 + velocityY5;
    ball5.style.top = positionY5 + 'px';
  } else {                                 
    positionY5 = positionY5 - velocityY5;
    ball5.style.top = positionY5 + 'px';
  }
  
 // Reversing Direction
  if (positionX5 > maxX5 || positionX5 <= minX5) { 
    reverseX5 = !reverseX5;
  } 
  if (positionY5 > maxY5 || positionY5 <= minY5) {
    reverseY5 = !reverseY5;
  } 
}


// This call the moveBall function every 100ms for assignment
var intervalId = setInterval(moveBall, 100);
var intervalId = setInterval(moveBall2, 50);
var intervalId = setInterval(moveBall3, 75);
var intervalId = setInterval(moveBall4, 25);
var intervalId = setInterval(moveBall5, 125);


// copy this into console to stop ball movement:   clearInterval(intervalId)
