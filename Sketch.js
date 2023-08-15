var jumping = false
var platforms 

function preload() {
    bgImage = loadImage("background.png")
    playerImage = loadImage("PixelPlayer.png")
}
function setup() {
    createCanvas(windowWidth, windowHeight -20)
    gameState = 1

    platforms = new Group()

    player = createSprite(100,500)
    player.addImage(playerImage)

    ground = createSprite(width/2, height-20, width, 20)
    ground.visible = false

    platform1 = createSprite(width-200, height-200, 300, 20)
    platform1.shapeColor = "green"

}
function draw() {
    background(bgImage)
    if(gameState == 1){
        if(keyDown("UP_ARROW") && jumping == false){
            jumping = true
            player.velocityY = -20          
        }
        player.velocityY += 1
        player.collide(ground)
        
        player.collide(platform1)
        

        if (keyDown("LEFT_ARROW")){
            player.x -= 10
            player.rotation -=15
        }

        if (keyDown("RIGHT_ARROW")){
            player.x += 10
            player.rotation +=15
        }
        drawSprites()
        if(player.collide(ground) || player.collide(platform1)){
            jumping = false
        }
    }
    
    
}
