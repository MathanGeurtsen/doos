/* Voorbeeld-sketch voor het gebruik van Open Sound Control in P5js - server
 * Deze sketch luistert naar berichten die worden gestuurd naar poort 9000.
 */

//aanmaken van de benodigde variabelen.
let server;
let connect
let x, y;

// declaring public variables

let black = '#ffffff';
let grey = '#f3d3d3';
let red = '#ff0000';
let green = '#00ff00';
let blue = '#0000ff';

let xoffleft; let yoffup;

// helper functions
function drawcircle(x,y,d,c) {
  fill(c);
  ellipse(x * windowWidth +xoffleft ,y *windowHeight +yoffup, 2/20 * windowHeight);
};

function drawrect(x,y,w,h, color) {
  fill(color);
  rect(x ,y*windowHeight ,w ,h);
}

  function ball1 (color){ drawcircle(1/6,1/3, 2/20 * windowHeight,color)};
  function ball2 (color){ drawcircle(1/6,2/3, 2/20 * windowHeight,color)};
  function ball3 (color){ drawcircle(2/6,1/3, 2/20 * windowHeight,color)};
  function ball4 (color){ drawcircle(2/6,2/3, 2/20 * windowHeight,color)};
  function ball5 (color){ drawcircle(3/6,1/3, 2/20 * windowHeight,color)};
  function ball6 (color){ drawcircle(3/6,2/3, 2/20 * windowHeight,color)};
  function ball7 (color){ drawcircle(4/6,1/3, 2/20 * windowHeight,color)};
  function ball8 (color){ drawcircle(4/6,2/3, 2/20 * windowHeight,color)};

function rect1 (color) {fill (color);drawrect(xoffleft, 1/3, 1/40*windowWidth, 1/40*windowWidth, color)};
function rect2 (color) {fill (color);drawrect(xoffleft, 2/3, 1/40*windowWidth, 1/40*windowWidth, color)};
function rect3 (color) {fill (color);drawrect(windowWidth - xoffleft - 1/40*windowWidth, 1/3, 1/40*windowWidth, 1/40*windowWidth, color)};
function rect4 (color) {fill (color);drawrect(windowWidth - xoffleft - 1/40*windowWidth, 2/3, 1/40*windowWidth, 1/40*windowWidth, color)};

function setup() {
  createCanvas(windowWidth,windowHeight);

  //////////////////
  // SERVER CODE  //
  //////////////////

  //maak een connect-object aan dat zorgt voor de communicatie met oscServer.js
  connect = new Connect();
  
  //maak verbinding met oscServer.js, en voor code tussen {} uit zodra deze verbinding tot stand is gekomen.
  connect.connectToServer(function() {
    //maak een nieuw server-object aan.
    server = new Server();

    //start de server en zorg dat deze gaat luisteren naar poort 9000
    server.startServer(9000);

    //als de server een bericht ontvangt voert deze de functie oscReceiver uit en geeft deze twee argumenten mee: address en msg.
    server.getMessage(function(address,msg) {
      oscReceiver(address,msg);
    });
  });

  x = 100;
  y = 100;


 ///////////////
 // OWN CODE  //
 ///////////////


  xoffleft = 1/20 * windowWidth;
  yoffup = 1/20* windowHeight;

  background(black);
  fill(red);
  rect(windowWidth* 1/20, windowHeight* 1/20, windowWidth* 18/20, windowHeight* 18/20);

  ball1(red);
  ball2(red);
  ball3(red);
  ball4(red);
  ball5(red);
  ball6(red);
  ball7(red);
  ball8(red);

 rect1(red);
 rect2(red);
 rect3(red);
 rect4(red);



}

function draw() {
  // background(50,0,220); OLD
  // ellipse(x,y,25); OLD

  // ball1(blue);
 
}

//de functie die aangeroepen wordt als er OSC-data binnenkomt
function oscReceiver(address,msg) {
  //als de variabele address gelijk is aan /y wordt de code tussen de {} uitegevoerd
  if (address === "sensor1 ,1") {
    ball1(blue);
  }
  else if (adress === "sensor1 , 0"){
    ball1(red);    
  }

  if (address === "sensor2 ,1") {
    ball2(blue);
  }
  else if (adress === "sensor2 , 0"){
    ball2(red);    
  }

  if (address === "sensor3 ,1") {
    ball3(blue);
  }
  else if (adress === "sensor3, 0"){
    ball3(red);    
  }

  if (address === "sensor4 ,1") {
    ball4(blue);
  }
  else if (adress === "sensor4 , 0"){
    ball4(red);    
  }

  if (address === "sensor5 ,1") {
    ball5(blue);
  }
  else if (adress === "sensor5 , 0"){
    ball5(red);    
  }

  if (address === "sensor6 ,1") {
    ball6(blue);
  }
  else if (adress === "sensor6 , 0"){
    ball6(red);    
  }

  if (address === "sensor7 ,1") {
    ball7(blue);
  }
  else if (adress === "sensor7 , 0"){
    ball7(red);    
  }

  if (address === "sensor8 ,1") {
    ball8(blue);
  }
  else if (adress === "sensor8 , 0"){
    ball8(red);    
  }
  //als de variabele address gelijk is aan /x wordt de code tussen de {} uitegevoerd
  else if (address == "/x") {
    x = msg;
  }

  if (address === "sensor1 ,1") {
    rect1(blue);
  }
  else if (adress === "sensor1 , 0"){
    rect1(red);    
  }

  if (address === "sensor1 ,1") {
    rect1(blue);
  }
  else if (adress === "sensor1 , 0"){
    rect1(red);    
  }

  if (address === "sensor1 ,1") {
    rect1(blue);
  }
  else if (adress === "sensor1 , 0"){
    rect1(red);    
  }

  if (address === "sensor1 ,1") {
    rect1(blue);
  }
  else if (adress === "sensor1 , 0"){
    rect1(red);    
  }

}
