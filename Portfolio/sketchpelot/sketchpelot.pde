int radio, bolas;
PVector pos, vel;
float dt;
Bola[] pelotas = new Bola[100];
//SETUP: definición de variables y ventana
void setup(){
  size(600,600);//tamaño de pantalla
  radio=64;//radio de la elipse
  bolas = 0;
}
//DRAW: bucle de dibujado de elementos dentro de la ventana
void draw(){
  background(255);//color de fondo
  //a pintar 
  for (int i = 0; i < bolas; i++) {
    pelotas[i].mover();
    pelotas[i].comprobarLados();
    pelotas[i].dibujar();
  }
  
  
}

void mouseClicked(){
  pelotas[bolas] = new Bola();
  bolas++;
}

class Bola {
 
  PVector pos;
  PVector vel;
  PVector acc;
  float topvel;
  color pintura;
 
  Bola() {
    pos = new PVector(mouseX,mouseY);
    PVector velocity = new PVector(random(0,width),random(0,height));
    vel = velocity.normalize();
    vel.mult(20);
    topvel = 100;
    pintura = color(random(0,255),random(0,255),random(0,255));
  }
  void mover() {
    PVector dir = vel;
    dir.normalize();
    dir.mult(2);
    acc = dir;
    vel.add(acc);
    vel.limit(topvel);
    pos.add(vel);
  }
  
  void comprobarLados(){
  if(pos.x + radio/2 > width){
    pos.x = width - radio/2;
    vel.x*=-1;
  }
    
  if(pos.x - radio/2 < 0){
    pos.x = 0 + radio/2;
    vel.x*=-1;
  }
    
  if(pos.y + radio/2 > height){
    pos.y = height - radio/2;
    vel.y*=-1;
  }
    
  if(pos.y - radio/2 < 0){
    pos.y = 0 + radio/2;
    vel.y*=-1;
  }
  }
 
  void dibujar() {
  //contorno de la elipse
    stroke(0);
    strokeWeight(6);
    //interior de la elipse
    fill(pintura);
    ellipse(pos.x,pos.y,radio,radio);
  }
}
