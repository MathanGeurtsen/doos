
var d = 3/20 * windowHeight

var x = windowWidth * 1/20;
var y = windowWidth * 1/20;
var w = windowWidth * 18/20;
var h = windowWidth * 18/20;

var lengthW = 1/3 * windowWidth;
var lengthH = 1/3 * windowHeighth;

var x1 = 1/6 * (w-x);      var y1 = 1/3;
var x2 = 23.3/60 * l(w-x); var y2 = * (h-y);
var x3 = 36.6/60* (w-x);   var y3 = * (h-y);
var x4 = 5/6 * (w-x);      var y4 = * (h-y);
var x5 = 1/6 * (w-x);      var y5 = * (h-y);
var x6 = 23.3/60 * (w-x);  var y6 = * (h-y);
var x7 = 36.6/60*(w-x);    var y7 = * (h-y);
var x8 = 5/6*(w-x);        var y8 = * (h-y);


function ball1() {
  fill(900);
  circle(x,y,d);
};


function setup() {
  //plaats hier de code die maar één keer hoeft te worden uitgevoerd
  createCanvas(windowWidth,windowHeight);
  background(000);
  fill(500);
  rect(windowWidth* 1/20, windowHeight* 1/20, windowWidth* 18/20, windowHeight* 18/20);
};

function draw() {
  ellipse(50, 50, 80, 80);
  //plaats hier de code die continue herhaald moet worden.
};
