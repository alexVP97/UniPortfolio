let radio1 = 0;
let posej1;
let centro1;
let t1 = 0;
let w1 = 0;
let dt1 = 0;
function setup(){
    let cnv = createCanvas(800, 800);
    cnv.parent('ej2t1');
    centro1=createVector(width / 2, height / 2);
    radio1=250;
    posej1=new createVector(centro1.x + radio1, centro1.y);
    w1=0;
    t1=0;
    dt1=1 / 60;
}

function draw(){
    background(255);
    stroke(45);
    strokeWeight(2);
    line(width / 2, 0, width / 2, height);
    line(0, height / 2, width, height / 2);
    noFill();
    circle(centro1.x, centro1.y, radio1 * 2);
    stroke(200, 20, 10);
    strokeWeight(6);
    fill(200);
    w1=w1 + radians(6);
    posej1.x=centro1.x + radio1 * cos(w1);
    posej1.y=centro1.y + radio1 * sin(w1);
    ellipse(posej1.x, posej1.y, 35, 35);
}