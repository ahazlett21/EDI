/* export SVG
DDF 2019
need to have p5.svg.js in project and in index.html
see -https://github.com/zenozeng/p5.js-svg
this will save an SVG file in your download folder
*/

var pW = 11//width of paper in inches
var pH = 8.5//height of paper in inches

function setup() {
  createCanvas(pW*72, pH*72, SVG); // Create SVG Canvas
  strokeWeight(1); // do 0.1 for laser
  stroke(255, 0, 0); // red is good for laser
  noFill(); // better not to have a fill for laser

}

function draw() {
q=118
w=336
e=368
r=276
t=424
u=554
i=396
o=146
p=646
a=702
s=90
d=674
f=58
g=494
ellipse(90, 306, 90, 90);
ellipse(702, 306, 90, 90);
triangle(e, q, i, f, t, q);
triangle(e, u-60, i, g+60, t, u-60);

triangle(s/1.5, w/1.5, q/1.5, r/1.5, o/1.5, w/1.5);//top left
triangle(a/2.5, w/2.5, d/2.5, r/2.5, p/2.5, w/2.5);
triangle(e/1.5, q/1.5, i/1.5, f/1.5, t/1.5, q/1.5);
triangle(e/2.5, u/2.5, i/2.5, g/2.5, t/2.5, u/2.5);

triangle((s*1.5)+23, (w*1.5)-70, (q*1.5)+23, (r*1.5)+110, (o*1.5)+23, (w*1.5)-70);
triangle(((s*1.5)*4.866)-23, (w*1.5)-70, ((q*1.5)*3.474)-23, (r*1.5)+110, ((o*1.5)*2.616)-23, (w*1.5)-70);//big
triangle(e*1.5, q*1.5, i*1.5, f*1.5, t*1.5, q*1.5);
triangle(240, (q*1.5), 198, f*1.5, 156, q*1.5);

triangle((s/1.5)*12.2, w/1.5, (q/1.5)*9.0677, r/1.5, (o/1.5)*7.1369863, w/1.5);
triangle((a/2.5)*1.82, w/2.5, (d/2.5)*1.937, r/2.5, (p/2.5)*2.065, w/2.5);
triangle((e/1.5)*2.22, q/1.5, (i/1.5)*2, f/1.5, (t/1.5)*1.8, q/1.5);
triangle((e/2.5)*4.38, u/2.5, (i/2.5)*4, g/2.5, (t/2.5)*3.669, u/2.5);//top right

triangle(s/1.5, (w/1.5)*1.73, q/1.5, (r/1.5)*2.32, o/1.5, (w/1.5)*1.73);//upside down bottom left
triangle(a/2.5, (w/2.5)*3.553, d/2.5, (r/2.5)*4.543, p/2.5, (w/2.5)*3.553);
triangle(e/1.5, (q/1.5)*6.779, i/1.5, (f/1.5)*14.827, t/1.5, (q/1.5)*6.779);
triangle(e/2.5, (u/2.5)*1.761, i/2.5, (g/2.5)*2.097, t/2.5, (u/2.5)*1.761);

triangle((s/1.5)*12.2, (w/1.5)*1.73, (q/1.5)*9.0677, (r/1.5)*2.32, (o/1.5)*7.1369863, (w/1.5)*1.73);
triangle((a/2.5)*1.82, (w/2.5)*3.553, (d/2.5)*1.937, (r/2.5)*4.543, (p/2.5)*2.065, (w/2.5)*3.553);
triangle((e/1.5)*2.22, (q/1.5)*6.779, (i/1.5)*2, (f/1.5)*14.827, (t/1.5)*1.8, (q/1.5)*6.779);
triangle((e/2.5)*4.38, (u/2.5)*1.761, (i/2.5)*4, (g/2.5)*2.097, (t/2.5)*3.669, (u/2.5)*1.761);//top right

  stroke(255, 0, 0);
translate (width/2, height/2);
for(var y=-300; y<300; y=y+40){
  for (var x=-300; x<300; x=x+40){
  ellipse (0,0,x,y);

  }
}
stroke(255, 0, 0);
translate (width/2, height/2);
for(var y=-300; y<300; y=y+40){
  for (var x=-300; x<300; x=x+40){
  ellipse (0,0,x,y);

  }
}
stroke(255, 0, 0);
for(var y=-300; y<300; y=y+40){
  for (var x=-300; x<300; x=x+40){
  ellipse (0,-612,x,y);

  }
}

stroke(255, 0, 0);
for(var y=-300; y<300; y=y+40){
  for (var x=-300; x<300; x=x+40){
  ellipse (-792,0,x,y);

  }
}
stroke(255, 0, 0);
for(var y=-300; y<300; y=y+40){
  for (var x=-300; x<300; x=x+40){
  ellipse (-792,-612,x,y);

  }
}



  // save("mySVG.svg"); // give file name
  // print("saved svg");
  noLoop(); // we just want to export once
}
