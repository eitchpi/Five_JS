// Define variables to store circle position and speed
let x = 50;
let y = 50;
let speedX = 5; // Increase speed to make it move faster
let speedY = 5;

// Setup function to initialize canvas
function setup() {
  createCanvas(windowWidth, windowHeight); // Create a canvas covering the entire window
}

// Draw function to update and draw the circle
function draw() {
  background(0); // Set background color to black
  fill(255); // Set fill color to white
  ellipse(x, y, 50, 50); // Draw a circle at position (x, y) with a diameter of 50 pixels

  // Update circle position
  x += speedX;
  y += speedY;

  // If circle reaches the edge of the canvas, reverse its direction
  if (x + 25 >= width || x - 25 <= 0) {
    speedX *= -1;
  }
  if (y + 25 >= height || y - 25 <= 0) {
    speedY *= -1;
  }
}
