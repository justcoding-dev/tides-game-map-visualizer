/*
 * Functions for coordinate conversions and definitions
 *
 * Add the actual hints in the hints.js file
 */
 
minX = -4900;
maxX = 4900;
minY = -4900;
maxY = 4900;

function setup() {
  createCanvas(1200,1000);


}

// Convert a map longitude to canvas x
function fromLongitude(x) {
  return (x - 100) / 10 + 500 + 10;
}

// Convert a map latitude to canvas y
function fromLatitude (y) {
  return 1000 - ((y - 100) / 10 + 500 + 10);
}

// Convert a canvas x to map longitude
function toLongitude(x) {
  return (x -510) * 10 + 100;
}

// Convert a canvas y to map latitude
function toLatitude (y) {
  return (10 * (1000 - y - 510) + 100);
}


function drawGreen() {
  fill(0, 255,0, 64);
  stroke(0, 255,0, 255);
  strokeWeight(1);
}

function drawRed() {
  fill(255,0,128);
  stroke(255,0,128);
  strokeWeight(1);
}

function westOf(x) {

  if (x < maxX) {
    maxX = x;
  }

  x1 = fromLongitude(x);
  w = 1000 - x1 - 10;

  drawRed();
  rect(x1, 10, w, 980);
}

function eastOf(x) {

  if (x > minX) {
    minX = x;
  }

  x1 = fromLongitude(x);
  w = x1 - 10;
  
  drawRed();
  rect(10, 10, w, 980);
}

function northOf(y) {

  if (y > minY) {
    minY = y;
  }

  y1 = fromLatitude(y);
  h = 1000 - y1 - 10;

  drawRed();
  rect(10, y1, 980, h);
}

function southOf(y) {

  if (y < maxY) {
    maxY = y;
  }

  y1 = fromLatitude(y);
  h = y1 - 10;

  drawRed();
  rect(10, 10, 980, h);
}

function within(x,y,r) {

  if ((x - r) > minX) {
    minX = x - r;
  }

  if ((x + r) < maxX) {
    maxX = x + r;
  }

  if ((y - r) > minY) {
    minY = y - r;
  }

  if ((y + r) < maxY) {
    maxY = y + r;
  }

  x1 = fromLongitude(x);
  y1 = fromLatitude(y);
  r1 = 2 * r / 10;
  
  drawGreen();
  circle(x1,y1,r1);
  
}

function atLeast(x,y,r) {
  x1 = fromLongitude(x);
  y1 = fromLatitude(y);
  r1 = 2 * r / 10;

  drawRed();
  circle(x1,y1,r1);
}

function draw() {

  // Prepare the background and border
  stroke(0,0,255);
  fill(200,200,255);
  strokeWeight(5);

  rect(5,5,990,990);

  hints();

  // Clear text area
  stroke(255,255,255);
  fill(255,255,255);
  rect(1001, 0, 199, 200);
  
  stroke(0,0,0, 0);
  fill(0,0,0,255);
  textSize(14);

  text('Mouse Position:', 1010, 20);
  
  if (mouseX >= 10 && mouseX <= 990) {
    if (mouseY >= 10 && mouseY <= 990) {
	  lon = toLongitude(mouseX);
	  text('lon: ' + lon, 1010, 45);
	  lat = toLatitude(mouseY);
	  text('lat: ' + lat, 1010, 65);
	}
  }

  text('Search Area:', 1010, 100);
  
  // Write the calculated area boundaries
  text('lon: ' + minX + ' ... ' + maxX, 1010,125);
  text('lat: ' + minY + ' ... ' + maxY, 1010, 145);


  fill(0,0,0,0);
  stroke(0,0,0, 255);
  
  // Draw mouse position
  if (mouseX >= 10 && mouseX <= 990) {
    line(mouseX, 10, mouseX, 990);
  }

  if (mouseY >= 10 && mouseY <= 990) {
    line(10, mouseY, 990, mouseY);
  }

  // Mark the target area
  rect(fromLongitude(minX), fromLatitude(maxY), (maxX - minX) / 10, (maxY - minY) / 10);


}