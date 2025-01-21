let i, b, t, wY, wX, bY, bX, tX, tY, season;
let winter, summer, spring, autumn;
let select, birdCheck, ySky;

function preload () {
  winter = loadImage('winter.png');
  summer = loadImage('summer.png');
  spring = loadImage('spring.png');
  autumn = loadImage('autumn.png');

}
function setup() {
  createCanvas(400, 500);
  frameRate(5);
  select = createSelect();
  select.position(50, 450);
  select.option('Spring');
  select.option('Summer');
  select.option('Autumn');
  select.option('Winter');
  birdCheck = createCheckbox("Birds");
  birdCheck.position(150, select.y);
}
//weatherr and sunset
// 3 user inputs mouse y position for sun rise and set, colours follow
// selection box for what sort of weather, 
// check box for mountain, sea, birds and clouds. 

function draw() {
  background(255);
  sky();
  clouds();
  mountain();
  water();
  birds();
  noStroke();
  fill(255);
  rect(0, 400, 400, 100);
  fill(0);
  text("move your mouse up and down to see the sun set!", 50, 430);

}

//sky
function sky() {
  let season = select.selected();
  if (mouseY > 0 && mouseY <=400) {
    ySky = mouseY/2 -200;
  } else {
    ySky = -200;
  }

  if (season === 'Winter') {
      image(winter, 0, ySky, 400, 600);
  } else if (season === 'Summer') {
      image(summer, 0, ySky, 400, 600);
  } else if (season === 'Spring') {
      image(spring, 0, ySky, 400, 600);
  } else if (season === 'Autumn') {
      image(autumn, 0, ySky, 400, 600);
  }
}

//mountain
function mountain() {
  beginShape();
  stroke(0);
  fill(0);
    vertex(0, 310);
    vertex(0, 230);
    vertex(23, 200);
    vertex(25, 190);
    vertex(45, 180);
    vertex(51, 180);
    vertex(80, 220);
    vertex(90, 210);
    vertex(95, 210);
    vertex(110, 215);
    vertex(130, 240);
    vertex(150, 270);
    vertex(155, 272)
    vertex(180, 300);
    vertex(200, 310);
  endShape();

  beginShape(); 
    vertex(200, 310);
    vertex(220, 300);
    vertex(290, 250);
    vertex(300, 250);
    vertex(315, 240);
    vertex(330, 235);
    vertex(350, 220);
    vertex(365, 220);
    vertex(400, 250);
    vertex(400, 310);
  endShape();
}

//water 
function water() {
  noStroke();
  let season = select.selected();
  if (season === 'Winter') {
    fill(39, 48, 92);
    rect(0, 310, 400, 90);
    stroke(55, 89, 117);
} else if (season === 'Summer') {
  fill(120, 97, 143);
  rect(0, 310, 400, 90);
  stroke(146, 109, 171);
} else if (season === 'Spring') {
  fill(133, 169, 201);
  rect(0, 310, 400, 90);
  stroke(169, 190, 209);
} else if (season === 'Autumn') {
  fill(134, 177, 179);
  rect(0, 310, 400, 90);
  stroke(171, 210, 212);
}
  for(i = 0; i <= 6; i++) {
    wX = random(0,400);
    wY = random(320, 350);
    bezier(wX, wY, wX+(random(8, 15)), wY-(random(10,20)), wX+(random(25, 37)), wY+(random(10,20)), wX+(random(40, 50)), wY);
  }
}

function birds() {
  if (birdCheck.checked()) {
  stroke(0);
  bX = random(200, 350);
  bY = random(100, 200);
  line(bX-2, bY, bX+2, bY);
  for(b = 0; b <= 5; b++) {
    triangle(bX, bY, bX-7, bY-5, bX-2, bY-2);
    triangle(bX, bY, bX+7, bY-5, bX+2, bY-2);
    bX = bX + random(3,15);
    bY = bY + random(3,10);
  }
}
}

function clouds() {
  noStroke();
  fill(255);
  for(t = 0; t <=3; t++) {
    tX = random(0,400);
    tY = random(50,230);
    ellipse(tX, tY, 70, 50);
    ellipse(tX + random(10, 50), tY + random(5, 15), random(50, 70), random(30, 65));
    ellipse(tX + random(10, 50), tY - random(5, 15), random(50, 70), random(30, 65));
    ellipse(tX - random(10, 50), tY - random(5, 15), random(50, 70), random(30, 65));
    ellipse(tX - random(10, 50), tY + random(5, 15), random(40, 60), random(20, 30));    ellipse(tX - random(10, 50), tY, random(60, 80), random(20, 40));
    ellipse(tX + random(10, 50), tY + random(5, 15), random(40, 60), random(20, 30));    ellipse(tX - random(10, 50), tY, random(60, 80), random(20, 40));
    
  }
}
