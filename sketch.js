function setup() {
    createCanvas(400, 400);
    background("navy");
  }
  
  function draw() {
    stroke("white");
    fill("ye");
    if (mouseIsPressed) {
      rect(mouseX, mouseY, 20, 20);
    }
  }
  