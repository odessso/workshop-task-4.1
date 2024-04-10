let d1, d2, c1, c2;
let backgroundImage;
let spawnedPets = []; // Array to store spawned pets

function preload() {
  backgroundImage = loadImage('images/expanded.park.bg.png');
  d1 = loadImage('images/dog.png');
  d2 = loadImage('images/angrydog.png');
  c1 = loadImage('images/cat.png');
  c2 = loadImage('images/angrycat.png');
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  
  // Button for spawning dog
  let woofButton = createButton('woof');
  woofButton.position(width / 4, height / 9);
  woofButton.mousePressed(spawnD1);
  
  // Button for spawning cat
  let meowButton = createButton('meow');
  meowButton.position(width / 1.5, height / 9);
  meowButton.mousePressed(spawnC1);
}

function spawnD1() {
  let x = random(0, width / 2); // Random x-coordinate from 0 to half of the canvas width
  let y = random(height / 2, height); // Random y-coordinate from half of the canvas height to the canvas height
  spawnedPets.push({ image: d1, x: x, y: y }); // Add spawned d1 to the array
}

function spawnC1() {
  let x = random(width / 2, width); // Random x-coordinate from half of the canvas width to the canvas width
  let y = random(height / 2, height); // Random y-coordinate from half of the canvas height to the canvas height
  spawnedPets.push({ image: c1, x: x, y: y }); // Add spawned c1 to the array
}

function draw() {
  image(backgroundImage, 0, 0, width, height);
  
  // Draw each spawned pet from the array
  for (let i = 0; i < spawnedPets.length; i++) {
    let pet = spawnedPets[i];
    image(pet.image, pet.x, pet.y);
  }
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}

