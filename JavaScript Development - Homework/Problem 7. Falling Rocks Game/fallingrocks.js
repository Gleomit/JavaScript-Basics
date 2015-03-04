var CANVAS_WIDTH = 480;
var CANVAS_HEIGHT = 640;
var CELL_SIZE = 16;

var backgroundImage = new Image();
var playerImage = new Image();
var rockImages = [];

for(var i = 0; i < 3;i++)
{
    var temp = new Image();
    temp.src = "resources/rock" + i + ".png";
    rockImages.push(temp);
}

playerImage.src = "resources/character.png";
backgroundImage.src = "resources/background.png";

var canvasElement = document.createElement("canvas");
var canvasContext = canvasElement.getContext("2d");

canvasElement.width = CANVAS_WIDTH;
canvasElement.height = CANVAS_WIDTH;

document.body.appendChild(canvasElement);
document.addEventListener("keydown", keyDownHandler, false);

function keyDownHandler(event)
{
    var keyPressed = String.fromCharCode(event.keyCode);
 
    if (keyPressed == "D" || event.keyCode == 39)
    {	
        player.positionX += 6;
    }
    else if (keyPressed == "A" || event.keyCode == 37)
    {	
        player.positionX -= 6;
    }
}


var player =    
{
    positionX: CANVAS_WIDTH / 2 - CELL_SIZE * 2,
    positionY: 26 * CELL_SIZE,
    width: CELL_SIZE * 3,
    height: CELL_SIZE * 3,
    draw: function()
    {
        canvasContext.drawImage(playerImage, this.positionX, this.positionY);
    }
}

var enemies = [];
var health = 120;
var score = 0;
var gameOver = false;

setInterval(gameLoop, 1000 / 60);
setInterval(addTheEnemy, 1000);

function gameLoop()
{
    draw();
    update();
}

function draw()
{
    canvasContext.clearRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
    canvasContext.drawImage(backgroundImage,0,0);
    if(gameOver === false)
    {
        drawGUI();
        for(var i = 0; i < enemies.length;i++)
            enemies[i].draw();
    }
    else
    {
        canvasContext.fillStyle = "#000";
        canvasContext.font = "50px cursive";
        canvasContext.fillText("Game over!", CELL_SIZE * 7, CANVAS_HEIGHT / 2 - CELL_SIZE * 5);
        canvasContext.font = "20px cursive";
        canvasContext.fillText("The game will be restarted in five seconds!", 2 * CELL_SIZE, CANVAS_HEIGHT / 2 - CELL_SIZE * 3);
        setTimeout(restartGame, 5000);
    }
    player.draw();
}

function drawGUI()
{
    canvasContext.fillStyle = "#fff";
    canvasContext.font = "25px fantasy";
    canvasContext.fillText("Score: " + score, 0, 25);
    canvasContext.fillText("Health: ", 270, 25);
    
    if(health >= health / 2)
        canvasContext.fillStyle = "#0f0";
    else
        canvasContext.fillStyle = "#f00";
    canvasContext.fillRect(350, 7, health, 20);
    
    canvasContext.strokeStyle = "#fff";
    canvasContext.beginPath();
    canvasContext.moveTo(0,30);
    canvasContext.lineTo(CANVAS_WIDTH,35);
    canvasContext.stroke();
}

function update()
{
    for(var i = 0; i < enemies.length;i++)
    {
        enemies[i].update();
        if(enemies[i].positionY + CELL_SIZE >= CANVAS_HEIGHT - 8 * CELL_SIZE)
        {
            enemies.splice(i,1);
            score++;
        }
        if(collisionOccurred(player, enemies[i]) === true)
        {
            health -= enemies[i].hitPower;
            enemies.splice(i,1);
        }
    }
    if(player.positionX + player.width >= CANVAS_WIDTH)
        player.positionX = CANVAS_WIDTH - player.width;
    else if(player.positionX <= 0)
        player.positionX = 0;
    if(health <= 0)
        gameOver = true;
}

function collisionOccurred(objectOne, objectTwo)
{
    if (objectOne.positionX < objectTwo.positionX + objectTwo.width  && 
        objectOne.positionX + objectOne.width  > objectTwo.positionX &&
		objectOne.positionY < objectTwo.positionY + objectTwo.height &&
        objectOne.positionY + objectOne.height > objectTwo.positionY) 
    {
        return true;
    }
    else
        return false;
}

function createEnemy()
{
    var enemy =
    {
        speed: Math.random() * 2 + 0.5,
        width: CELL_SIZE,
        height: CELL_SIZE,
        type: Math.floor(Math.random() * 2),
        hitPower: Math.floor(Math.random() * 25) + 5,
        positionX: (Math.floor(Math.random() * CANVAS_WIDTH - CELL_SIZE)),
        positionY: Math.floor(Math.random() * 67) + 35,
        draw: function()
        {
            canvasContext.drawImage(rockImages[this.type], this.positionX, this.positionY);
        },
        update: function()
        {
            this.positionY += this.speed;
        }
    }
    return enemy;
}

function addTheEnemy()
{   
    enemies.push(createEnemy());
}

function restartGame()
{
    for(var i = 0; i < enemies.length;i++)
    {
        enemies.pop();
    }
    gameOver = false;
    health = 120;
    score = 0;
    player.positionX = CANVAS_WIDTH / 2 - CELL_SIZE * 2;
}