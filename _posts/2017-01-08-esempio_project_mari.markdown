---
layout: post
title:  "Retini"
categories: project
author: cybermarinella
username: cybermarinella
description: p5
# List all the libraries needed to load your script
includes:
  - https://cdnjs.cloudflare.com/ajax/libs/p5.js/0.5.5/p5.min.js
  - https://cdnjs.cloudflare.com/ajax/libs/p5.js/0.5.5/addons/p5.dom.min.js
# Load your script in /js/projects
href: retini.js
date: 2016-01-01 10:40:00 +0100
---
Uno dei principali strumenti per il grafico del XX sec.<br>
I retini, venduti in colorificio o cartoleria, sono fogli adesivi prestampati con pattern di vario genere, 
usati per ottenere diversi tipi di campiture, presenti in ambito tecnico e artistico.
Sovrapponendoli è possibile ottenere bizzarri effetti ottici. 

Del codice semplice per iniziare.<br>
Il codice genera retini casuali e inverte il peso di soggetto / sfondo in base alla posizione del mouse. Per completare il progetto mi piacerebbe vincolare tutti i rapporti numerici alla proporzione aurea.


{% highlight javascript %}
// setup colors
var chiaro
var scuro

//setup space
var lg_diam
var lg_rad
var a //atan


function setup(){
  var myCanvas = createCanvas(windowWidth, windowHeight)
  myCanvas.parent('myContainer')
  noStroke()
  myrandom()
}

function draw(){
  a = atan2(pmouseY-height/2, pmouseX-width/2)
  chiaro = map(mouseX, width/2, width/2, 25, 250)
  scuro = map (mouseX, 0, width/2, width/2, 250, 25)
  lg_diam = width +100
  lg_rad = lg_diam / 2
  background(scuro)
  fill(chiaro)
  
  rotateCerchio()
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight)
}

function rotateCerchio(){
  translate(width/2, height/2)
  retino(a)
  retino(-a)
}

function retino(rotation){
  push()
  rotate(rotation)
  for (var x = 0; x <= lg_diam; x+=distance) {
    for (var y = 0; y <= lg_diam; y+=distance) {
      star(x, y, mysize, divisor, poligono)
    }
  }
  pop()
}

function star(x, y, radius1, radius2, npoints) {
  var angle = TWO_PI / npoints;
  var halfAngle = angle/2.0;
  beginShape();
  for (var a = 0; a < TWO_PI; a += angle) {
    var sx = x-lg_rad + cos(a) * radius2;
    var sy = y-lg_rad + sin(a) * radius2;
    vertex(sx, sy);
    sx = x-lg_rad + cos(a+halfAngle) * radius1;
    sy = y-lg_rad + sin(a+halfAngle) * radius1;
    vertex(sx, sy);
  }
  endShape(CLOSE);
}

function mousePressed() {
  myrandom()
}

function myrandom(){
  mysize = int(random(21,89))
  distance = int(random(mysize*1.618, mysize*3))
  poligono = int(random(2,8))
  divisor = random(mysize*1.618,  mysize/distance)
}

/*
_=r"""             )_(tnirp
gro.elituniecidoc #      ""
""                       ""
""                       ""
        )]1-::[_+_%      ""
""\"\"\s%"\"\"\r=_"      ""
""      (=_;""";_=(      ""
""      "_=r\"\"\"%s\"\"\""
""      %_+_[::-1])        
""                       ""
""                       ""
""      # codiceinutile.org
print(_)    
*/


{% endhighlight %}

