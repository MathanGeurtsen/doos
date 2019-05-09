// declaring public variables
let x1; let y1;
let x2; let y2;
let x3; let y3;
let x4; let y4;
let x5; let y5;
let x6; let y6;
let x7; let y7;
let x8; let y8;

let d; let x; let y; let h; let w;

let black = '#ffffff';
let grey = '#f3d3d3';
let red = '#ff0000';
let green = '#00ff00';
let blue = '#0000ff';

let xoffleft; let yoffup;

function setup() {
  //plaats hier de code die maar eenn keer hoeft te worden uitgevoerd
  canvas = createCanvas(windowWidth,windowHeight);


  let d = 3/20 * windowHeight

  let x = windowWidth * 1/20;
  let y = windowWidth * 1/20;
  let w = windowWidth * 18/20;
  let h = windowWidth * 18/20;

  let lengthW = 1/3 * windowWidth;
  let lengthH = 1/3 * windowHeight;

  xoffleft = 1/20 * windowWidth;
  yoffup = 1/20* windowHeight;

  background(black);
  fill(red);
  rect(windowWidth* 1/20, windowHeight* 1/20, windowWidth* 18/20, windowHeight* 18/20);

  function ball1 (color){ drawcircle(1/6,1/3, d,color)}
  function ball2 (color){ drawcircle(1/6,2/3, d,color)}
  function ball3 (color){ drawcircle(2/6,1/3, d,color)}
  function ball4 (color){ drawcircle(2/6,2/3, d,color)}
  function ball5 (color){ drawcircle(3/6,1/3, d,color)}
  function ball6 (color){ drawcircle(3/6,2/3, d,color)}
  function ball7 (color){ drawcircle(4/6,1/3, d,color)}
  function ball8 (color){ drawcircle(4/6,2/3, d,color)}


  // var testball = drawcircle(1/6,1/3,d, green)

};

function draw() {
  if (message[1] == "ball1") {
    ball1(blue);
  }
  else if (message[1] == "ball2")
}

function drawcircle(x,y,d,c) {
  fill(c);
  ellipse(x * windowWidth +xoffleft ,y *windowHeight +yoffup,d);
};
