let radio = 0;
let acc;
let pos;
let vel;
let p0;
let pos1;
let pos2;
let pos3;
let pos4;
let pos5;
let pos6;
let v1;
let v2;
let v3;
let v4;
let v5;
let v6;
let dt = 0;
function setup(){
    var cnv = createCanvas(600, 400);
    cnv.parent('ej1t1');
    cnv.mouseClicked(reinicio);
    radio= 20;
    pos=new createVector(50, 200);
    vel=new createVector(0, 0);
    dt=0.1;
    p0=new createVector(50, 200);
    pos1=new createVector(100, 100);
    pos2=new createVector(225, 300);
    pos3=new createVector(350, 50);
    pos4=new createVector(450, 350);
    pos5=new createVector(500, 200);
    pos6=new createVector(550, 250);
    v1= pos1.copy().sub(p0);
    v1.normalize();
    v1.mult(3);
    v2= pos2.copy().sub(pos1);
    v2.normalize();
    v2.mult(7);
    v3= pos3.copy().sub( pos2);
    v3.normalize();
    v3.mult(3);
    v4= pos4.copy().sub(pos3);
    v4.normalize();
    v4.mult(8);
    v5= pos5.copy().sub(pos4);
    v5.normalize();
    v5.mult(4);
    v6= pos6.copy().sub(pos5);
    v6.normalize();
    v6.mult(2);
}

function draw(){
    background(255);
    stroke(45);
    strokeWeight(6);
    line(p0.x, p0.y, pos1.x, pos1.y);
    stroke(45);
    strokeWeight(6);
    line(pos1.x, pos1.y, pos2.x, pos2.y);
    stroke(45);
    strokeWeight(6);
    line(pos2.x, pos2.y, pos3.x, pos3.y);
    stroke(45);
    strokeWeight(6);
    line(pos3.x, pos3.y, pos4.x, pos4.y);
    stroke(45);
    strokeWeight(6);
    line(pos4.x, pos4.y, pos5.x, pos5.y);
    stroke(45);
    strokeWeight(6);
    line(pos5.x, pos5.y, pos6.x, pos6.y);
    stroke(45);
    strokeWeight(6);
    stroke(200, 20, 10);
    strokeWeight(6);
    fill(200);
    if(pos.x < pos1.x) {
        acc=v1;
    }
    else if(pos.x < pos2.x) {
        acc=v2;
        vel=v2;
    }
    else if(pos.x < pos3.x) {
        acc=v3;
        vel=v3;
    }
    else if(pos.x < pos4.x) {
        acc=v4;
        vel=v4;
    }
    else if(pos.x < pos5.x) {
        acc=v5;
        vel=v5;
    }
    else {
        acc=v6;
        vel=v6;
    }
    vel.add(acc.copy().mult(dt));
    pos.add(vel);
    ellipse(pos.x, pos.y, radio, radio);

    if(pos.x > width)
        reinicio();
}

function reinicio(){
    pos=new createVector(50, 200);
    vel=new createVector(0, 0);
    dt=0.05;
    p0=new createVector(50, 200);
    pos1=new createVector(100, 100);
    pos2=new createVector(225, 300);
    pos3=new createVector(350, 50);
    pos4=new createVector(450, 350);
    pos5=new createVector(500, 200);
    pos6=new createVector(550, 250);
    v1= pos1.copy().sub(p0);
    v1.normalize();
    v1.mult(3);
    v2= pos2.copy().sub(pos1);
    v2.normalize();
    v2.mult(7);
    v3= pos3.copy().sub( pos2);
    v3.normalize();
    v3.mult(3);
    v4= pos4.copy().sub(pos3);
    v4.normalize();
    v4.mult(8);
    v5= pos5.copy().sub(pos4);
    v5.normalize();
    v5.mult(4);
    v6= pos6.copy().sub(pos5);
    v6.normalize();
    v6.mult(2);
}

