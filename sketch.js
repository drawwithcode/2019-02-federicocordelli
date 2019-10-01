function preload(){
  // put preload code here
}

function setup() {
  createCanvas(windowWidth, windowHeight);
   background(20);
   frameRate(60);

  // put setup code here
}

function draw() {
// background(20);
for
(var y =  -1000 + noise(frameCount/70) * windowHeight; y <= windowHeight; y+=100)
    {

        noStroke();
        smooth();
      /*
      fill("tomato");
      ellipse ((frameCount-4)*10, y, 1);


      fill ("teal");
      ellipse (frameCount, y, 1);
*/


    push();
      fill(255, 255, 255, random()*100);
      ellipse (frameCount, y, random(mouseX)/100);
    pop();

      if (mouseIsPressed) {
         document.location.reload();
       }


      text
      fill(0,0,0);
      textSize(15);
      text("shift the mouse to change the bubbles' dimension - click to restart", windowWidth/3,(windowHeight/4)*3);

    }
  // put drawing code here
}
