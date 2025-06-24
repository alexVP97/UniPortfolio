
//cosa donde junto las diferentes piezas
let sk1 = function(ejt1){
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
        ejt1.setup = function(){
            let cnv = ejt1.createCanvas(600, 400);
            ejt1.cnv.parent('ej1t1');
            ejt1.cnv.mouseClicked(reinicio);
            ejt1.radio= 20;
            ejt1.pos=new createVector(50, 200);
            ejt1.vel=new createVector(0, 0);
            ejt1.dt=0.1;
            ejt1.p0=new createVector(50, 200);
            ejt1.pos1=new createVector(100, 100);
            ejt1.pos2=new createVector(225, 300);
            ejt1.pos3=new createVector(350, 50);
            ejt1.pos4=new createVector(450, 350);
            ejt1.pos5=new createVector(500, 200);
            ejt1.pos6=new createVector(550, 250);
            ejt1.v1= pos1.copy().sub(p0);
            ejt1.v1.normalize();
            ejt1.v1.mult(3);
            ejt1.v2= pos2.copy().sub(pos1);
            ejt1.v2.normalize();
            ejt1.v2.mult(7);
            ejt1.v3= pos3.copy().sub( pos2);
            ejt1.v3.normalize();
            ejt1.v3.mult(3);
            ejt1.v4= pos4.copy().sub(pos3);
            ejt1.v4.normalize();
            ejt1.v4.mult(8);
            ejt1.v5= pos5.copy().sub(pos4);
            ejt1.v5.normalize();
            ejt1.v5.mult(4);
            ejt1.v6= pos6.copy().sub(pos5);
            ejt1.v6.normalize();
            ejt1.v6.mult(2);
        }

        ejt1.draw = function(){
            ejt1.background(255);
            ejt1.stroke(45);
            ejt1.strokeWeight(6);
            ejt1.line(p0.x, p0.y, pos1.x, pos1.y);
            ejt1.stroke(45);
            ejt1.strokeWeight(6);
            ejt1.line(pos1.x, pos1.y, pos2.x, pos2.y);
            ejt1.stroke(45);
            ejt1.strokeWeight(6);
            ejt1.line(pos2.x, pos2.y, pos3.x, pos3.y);
            ejt1.stroke(45);
            ejt1.strokeWeight(6);
            ejt1.line(pos3.x, pos3.y, pos4.x, pos4.y);
            ejt1.stroke(45);
            ejt1.strokeWeight(6);
            ejt1.line(pos4.x, pos4.y, pos5.x, pos5.y);
            ejt1.stroke(45);
            ejt1.strokeWeight(6);
            ejt1.line(pos5.x, pos5.y, pos6.x, pos6.y);
            ejt1.stroke(45);
            ejt1.strokeWeight(6);
            ejt1.stroke(200, 20, 10);
            ejt1.strokeWeight(6);
            ejt1.fill(200);
            if(ejt1.pos.x < ejt1.pos1.x) {
                ejt1.acc=v1;
            }
            else if(ejt1.pos.x < ejt1.pos2.x) {
                ejt1.acc=v2;
                ejt1.vel=v2;
            }
            else if(ejt1.pos.x < ejt1.pos3.x) {
                ejt1.acc=v3;
                ejt1.vel=v3;
            }
            else if(ejt1.pos.x < ejt1.pos4.x) {
                ejt1.acc=v4;
                ejt1.vel=v4;
            }
            else if(ejt1.pos.x < ejt1.pos5.x) {
                ejt1.acc=v5;
                ejt1.vel=v5;
            }
            else {
                ejt1.acc=v6;
                ejt1.vel=v6;
            }
            ejt1.vel.add(ejt1.acc.copy().mult(dt));
            ejt1.pos.add(ejt1.vel);
            ejt1.ellipse(ejt1.pos.x, ejt1.pos.y, ejt1.radio, ejt1.radio);

            if(ejt1.pos.x > ejt1.width)
                ejt1.reinicio();
        }

        ejt1.reinicio = function(){
            ejt1.pos=new createVector(50, 200);
            ejt1.vel=new createVector(0, 0);
            ejt1.dt=0.1;
            ejt1.p0=new createVector(50, 200);
            ejt1.pos1=new createVector(100, 100);
            ejt1.pos2=new createVector(225, 300);
            ejt1.pos3=new createVector(350, 50);
            ejt1.pos4=new createVector(450, 350);
            ejt1.pos5=new createVector(500, 200);
            ejt1.pos6=new createVector(550, 250);
            ejt1.v1= pos1.copy().sub(p0);
            ejt1.v1.normalize();
            ejt1.v1.mult(3);
            ejt1.v2= pos2.copy().sub(pos1);
            ejt1.v2.normalize();
            ejt1.v2.mult(7);
            ejt1.v3= pos3.copy().sub( pos2);
            ejt1.v3.normalize();
            ejt1.v3.mult(3);
            ejt1.v4= pos4.copy().sub(pos3);
            ejt1.v4.normalize();
            ejt1.v4.mult(8);
            ejt1.v5= pos5.copy().sub(pos4);
            ejt1.v5.normalize();
            ejt1.v5.mult(4);
            ejt1.v6= pos6.copy().sub(pos5);
            ejt1.v6.normalize();
            ejt1.v6.mult(2);
        }
}
let prom1 = new p5(sk1)//cosa que hace arrancar el programa