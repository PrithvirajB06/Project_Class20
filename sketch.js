var cat, cat_sitting, cat_running, cat_collided;
var mouse, mouse_standing, mouse_playing, mouse_collided;
var garden, garden_img;

function preload() {
    /*The images are loaded here.*/
    cat_sitting = loadAnimation("cat1.png");
    cat_running = loadAnimation("cat2.png", "cat3.png");
    cat_collided = loadAnimation("cat4.png");
 
    mouse_standing = loadAnimation("mouse1.png");
    mouse_playing = loadAnimation("mouse2.png", "mouse3.png");
    mouse_collided = loadAnimation("mouse4.png");

    garden_img = loadImage("garden.png");
}

function setup(){
    //All the sprites are created here.
    createCanvas(1000,800);
    garden = createSprite(400,400,995,795);
    garden.addImage(garden_img);

    cat = createSprite(750, 650, 50, 50);
    cat.setAnimation(cat_sitting);

    mouse = createSprite(200, 650, 50, 50);
    mouse.setAnimation(mouse_standing);



}

function draw() {

    background("white");
    keyPressed();

    if(cat.x - mouse.x < (cat.width + mouse.width)/2) {
        cat.velocityX = 0;
        cat.changeAnimation(cat_collided);
        mouse.changeAnimation(mouse_collided);
    }

    drawSprites();
}


function keyPressed(){
  if(keyCode === ENTER ) {
      cat.velocityX = -5;
      cat.changeAnimation(cat_running);
      mouse.changeAnimation(mouse_playing);
  }

}
