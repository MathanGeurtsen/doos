
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




  background(000);
  fill(500);
  rect(windowWidth* 1/20, windowHeight* 1/20, windowWidth* 18/20, windowHeight* 18/20);
};

let x1 = 1/6 * (w-x);       let y1 = 1/3 * (h-y);
let x2 = 23.3/60 * (w-x);  let y2 = 1/3 * (h-y);
let x3 = 36.6/60* (w-x);    let y3 = 1/3 * (h-y);
let x4 = 5/6* (w-x);        let y4 = 1/3 * (h-y);
let x5 = 1/6* (w-x);        let y5 = 2/3 * (h-y);
let x6 = 23.3/60* (w-x);    let y6 = 2/3 * (h-y);
let x7 = 36.6/60* (w-x);    let y7 = 2/3 * (h-y);
let x8 = 5/6* (w-x);        let y8 = 2/3 * (h-y);

function draw() {
  ball1();

  function ball1() {
    console.log(x1,y1);
    fill(999);
    circle(x1,y1,d);
  };

  //plaats hier de code die continue herhaald moet worden.
};
