function setup() { //runs once
  createCanvas(windowWidth, windowWidth);
  fill('magenta');
  strokeWeight(1);
}

function draw() {

var num = 10; //variable for the number of squares in the array
var sideLen = windowWidth/num;//variable for the side lenth of each square

  for (var y = 0; y < windowWidth; y = y + sideLen) {//loop to create rows in the y direction
     for (var x = 0; x < windowWidth; x = x + sideLen) {// loop to create a row of squares in the x direction0
  quad(x, y,//this makes a 300x300 pixel square
    x + sideLen, y,
    x + sideLen, y + sideLen,
    x, y + sideLen);
  }
  }

}
