if(window.innerWidth > 700){  
    let radio = 0;
    let bolas = 0;
    let dt = 0;
    let pelotas;
    function setup(){
        pelotas = new Array(100);
        var cnv = createCanvas(600, 600);
        radio=64;
        bolas=0;
        cnv.parent('contenedorSim');
        cnv.mouseClicked(masBolas);
    }

    function draw(){
        background(loadImage('Logo/folio2.jpg'));
        for(let i = 0;i < bolas;i++) {
            pelotas[i].mover();
            pelotas[i].comprobarLados();
            pelotas[i].dibujar();
        }
    }

    function masBolas(){
        pelotas[bolas]=new Bola();
        bolas++;
    }


    class Bola{
        constructor(){
            this.pos=new p5.Vector(mouseX, mouseY);
            let velocity = new p5.Vector(random(0, width), random(0, height));
            this.vel=velocity.normalize();
            this.vel.mult(20);
            this.topvel=100;
            this.pintura=color(random(0, 255), random(0, 255), random(0, 255));
        }

        mover(){
            let dir = this.vel;
            dir.normalize();
            dir.mult(2);
            this.acc=dir;
            this.vel.add(this.acc);
            this.vel.limit(this.topvel);
            this.pos.add(this.vel);
        }

        comprobarLados(){
            if(this.pos.x + radio / 2 > width) {
                this.pos.x=width - radio / 2;
                this.vel.x*=-1;
            }
            if(this.pos.x - radio / 2 < 0) {
                this.pos.x=0 + radio / 2;
                this.vel.x*=-1;
            }
            if(this.pos.y + radio / 2 > height) {
                this.pos.y=height - radio / 2;
                this.vel.y*=-1;
            }
            if(this.pos.y - radio / 2 < 0) {
                this.pos.y=0 + radio / 2;
                this.vel.y*=-1;
            }
        }

        dibujar(){
            stroke(0);
            strokeWeight(6);
            fill(this.pintura);
            ellipse(this.pos.x, this.pos.y, radio, radio);
        }

    }
}
