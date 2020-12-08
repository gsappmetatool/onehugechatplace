let bubbles = []; 
let backc;

function setup() {
  
  backc = color(255, 204, 0);
  createCanvas(windowWidth, windowHeight);
  for (let i = 0; i < 10; i++){
  	bubbles[i] = new Bubble(random(width),random(height));
  }
}

function draw() {
 /* background(backc);*/
  clear();
  for (let i = 0; i < bubbles.length; i++){
    bubbles[i].show();
    bubbles[i].move();
  }
}

function mousePressed(){
  
    backc = color(5, 204, 200);

	//append(bubbles, new Bubble(mouseX,mouseY));
  
    for(var i = 0; i < bubbles.length; i++){
      bubbles[i].clicked();
    }
}

class Bubble {
  constructor(tempx,tempy) {
  	this.x = tempx;
    this.y = tempy;
    this.size = random(20,70);
    this.r = random(255);
    this.g = random(255);
    this.b = random(255);
  }
  
  move() {
  	this.x += random(-5,1);
  	this.y += random(-5,1);
    
    if (this.y < 0){
        this.y = height;
        }
    
    
    if (this.y > height){
        this.y = 0;
    }
    
    if (this.x > width){
        this.x = 0;
        }
    
    if (this.x < 0){
    	this.x = width;
    }
  }
  
  show() {
  	stroke(255);
  	strokeWeight(1);
  	fill(this.r,this.g,this.b,100);
  	ellipse(this.x,this.y,this.size,this.size);
  }
  
  clicked() {
    var d = dist(mouseX, mouseY, this.x, this.y);
    if(d < this.size){
       backc = color(this.r, this.g, this.b)
      var rgb = { r: this.r, g: this.g, b: this.b };
      
        shareddatabase.ref("rm-test-emotion").set(rgb);
    }
  }
}

