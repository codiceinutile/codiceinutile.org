var theta = 0;
var padding = 20;

function setup() {
  var myCanvas = createCanvas(windowWidth, windowHeight);
  myCanvas.parent('myContainer');
  background(255);
}

function draw() {
  background(255);
  for(var y = padding; y <= height-padding; y+= 20) {
    for(var x = padding; x <= width-padding; x+= 25) {
      push();
      translate(x, y);
      if(x % 10 == 0) {
        push();
        rotate(theta)
        line(0, 0, 5, -5);
        pop();
      }
      else {
        push();
        rotate(-theta)
        line(0, 0, 5, -5);
        pop();
      }
      pop();

    }
  }

  theta += 0.1;
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
  background(20);
}
