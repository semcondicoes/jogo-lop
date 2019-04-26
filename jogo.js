/* 
    Equipe: 
        Bárbara Lacerda de Andrade - Subturma B (Líder) 
        Matheus dos Santos Bezerra da Silva - Subturma B
        Etapa 1
*/

var x=200;
var y=340;

function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(220);
  rect(170,55,55,55);
  ellipse(x,y,55,55);
  if(keyIsDown(RIGHT_ARROW)){
    x=x+3;}
  if(keyIsDown(LEFT_ARROW)){
    x=x-3;}
  if(keyIsDown(UP_ARROW)){
    y=y-3;}
  if(keyIsDown(DOWN_ARROW)){
    y=y+3;}
}