/* export SVG
DDF 2019
need to have p5.svg.js in project and in index.html
see -https://github.com/zenozeng/p5.js-svg
this will save an SVG file in your download folder
*/

var pW = 11//width of paper in inches
var pH = 8.5//height of paper in inches
var x=0
var y=0

function setup() {
  createCanvas(pW*72, pH*72, SVG); // Create SVG Canvas
  strokeWeight(1); // do 0.1 for laser
  stroke(255, 0, 0); // red is good for laser
  noFill(); // better not to have a fill for laser
  background(230);
  ellipseMode(CENTER);
  translate (width/2, height/2);

}



function draw() {
  translate (width/2, height/2);
  for(var y=-300; y<300; y=y+40){
    for (var x=-300; x<300; x=x+40){
    ellipse (0,0,x,y);
    }
  }



  // save("mySVG.svg"); // give file name
  // print("saved svg");
  noLoop(); // we just want to export once
}
