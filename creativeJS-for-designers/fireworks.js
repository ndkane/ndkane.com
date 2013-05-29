
var canvas = document.getElementById('creativejs'),
    c = canvas.getContext('2d');
	
// Various properties within an object.
// If problem, Check syntax - Curly Brackets contains,
// commas for various values in contain etc. Semicolon
// finish a line.

var particles = [];

var counter = 0;

var hue = 0;

 //add that new p onto the array

c.fillStyle = rgb(0,0,0);
c.fillRect(0,0,canvas.width,canvas.height); 
  
function draw() {
  
  c.globalCompositeOperation ='source-over';
  
  c.fillStyle = rgba(0,0,0,0.1);
  c.fillRect(0,0,canvas.width,canvas.height);
  //c.fillText(counter + " " + counter%10, 200 , 20);
  
  c.globalCompositeOperation ='lighter';
  
  if(!mouseDown){
    hue = random(360);
  }
  
  //
  
  if(counter%0.25 === 0){
  
    if(mouseDown){
      makeParticle();
    }
    
  }
  
  if(particles.length>200){
     
    particles.shift();
  
  }
  
  frameRate = "20";
  
  // If article is longer than 200, then get rid
  // of the oldest one:
  
  if(particles.length>50){
   
    particles.shift(); 
  
  }
  
  for(var i=0; i<particles.length; i++){
 
    var p = particles[i];
    
    //p.hue means the the hue of each particle
    
    
    c.fillStyle = hsla(p.hue,94,54, 0.8); 
    c.fillCircle(p.x, p.y, p.size);

    //c.fillStyle = hsla(54,24,54,0.2);
    //c.fillCircle(p.x,p.y,p.size*0.7);
    
   // c.fillStyle = rgba(245,235,225,0.1);
    c.fillCircle(p.x,p.y,p.size*0.5);
    
    
    p.x += p.Xvel;
    p.y += p.Yvel;
    p.size*= 0.99; // = p.size * 0.9
    // Makes it shrink at 90% of the frame.
   
      
    p.Yvel += p.gravity;
    
    //Increase the y velocity each time you cycle through the frame so it gets faster downwards.
    
    var drag = 0.96;
    p.Xvel *= drag;
    p.Yvel *= drag;
    
    //We're multiplying the x and y velocity by .96
     
   /*  hue ++; */
  }
 counter++;
}
 
  
function makeParticle() {
     var p = {x:mouseX, // object
             y:mouseY,
             Xvel : random(-10,10), // only -10-10
             Yvel : random(-15,15),
             hue : hue,
             size : random(3,3),
             gravity : 0.5};

  particles.push(p);
}
