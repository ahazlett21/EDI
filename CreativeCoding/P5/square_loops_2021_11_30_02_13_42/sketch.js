function setup() {//runs once
  createCanvas(720, 720);
  fill ('magenta');
  strokeWeight (8);
}

function draw() {//runs in a loop
  background(220);

  translate (60,60);

 //loop to create rows in the y direction
  for(var y = 0; y < 600; y = y + 300){



  for(var x = 0; x < 600; x = x + 300){ //loop to create a row of squares in the x direction


    quad (x,y,
       x+300, y,
       x+300, y+300,
       x,y+300)
  }

    }

  noLoop ();
}
