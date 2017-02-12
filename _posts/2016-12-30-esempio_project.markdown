---
layout: post
title:  "Hypnotic lines"
categories: project
author: Federico Pepe
username: fedpep
description: Un progetto di Federico Pepe
# List all the libraries needed to load your script
includes:
  - https://cdnjs.cloudflare.com/ajax/libs/p5.js/0.5.5/p5.min.js
  - https://cdnjs.cloudflare.com/ajax/libs/p5.js/0.5.5/addons/p5.dom.min.js
# Load your script in /js/projects
href: test_1.js
date: 2016-12-30 10:39:00 +0100
---
Uno studio sulle funzioni pushMatrix() e popMatrix() realizzato in Processing e portato su p5.js.

{% highlight javascript %}
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

{% endhighlight %}
