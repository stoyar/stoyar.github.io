let canvas = document.getElementById('myCanvas');
let ctx = canvas.getContext('2d');

let dx = 3;
let dy = 3;
let ballRadius = 60;
let x = 0;
let y = 0;
let z = ballRadius;
let balls = 20;
let ballColor = '#0095dd';

let paddleHeight = 20;
let paddleWidth = 100;
let paddleX = (canvas.width - paddleWidth) / 2;
let rightPressed = false;
let leftPressed = false;

function randomColor() {
    let a = Math.floor(Number(Math.random()*255));
    let b = Math.floor(Number(Math.random()*255));
    let c = Math.floor(Number(Math.random()*255));
    ballColor = `rgb(${a}, ${b}, ${c})`
}

function drawBall() {
    //randomColor();
    ctx.beginPath();
    ctx.arc(x, y, ballRadius, 0, Math.PI*2);
    ctx.fillStyle = ballColor;
    ctx.fill();
    ctx.strokeStyle = '#bbbbbb';
    ctx.stroke();
    ctx.closePath();
}

function drawPaddle() {
    ctx.beginPath();
    ctx.rect(paddleX, canvas.height-paddleHeight, paddleWidth, paddleHeight);
    ctx.fillStyle = '#0070cc';
    ctx.fill();
    ctx.closePath();
}

function draw() {
    //ctx.clearRect(0, 0, canvas.width, canvas.height);
    drawBall();
    if(z > 0) {
        z--;
    } else {
        if(dy + y < ballRadius || dy + y > canvas.height-ballRadius) {
        dy = -dy;
        randomColor();
        }
        if(dx + x > canvas.width-ballRadius || dx + x < ballRadius) {
        dx = -dx;
        randomColor();
        }
    }
    x += dx;
    y += dy;
    
    if(rightPressed && paddleX < canvas.width-paddleWidth) {
        paddleX += 5;
    }
    else if(leftPressed && paddleX > 0) {
        paddleX -= 5;
    }

}

document.addEventListener('keydown', keyDownHandler, false);
document.addEventListener('keyup', keyUpHandler, false);

function keyDownHandler(e) {
    if(e.keyCode == 39) {
        rightPressed = true;
    } else if(e.keyCode == 37) {
        leftPressed = true;
    }
}

function keyUpHandler(e) {
    if(e.keyCode == 39) {
        rightPressed = false;
    } else if(e.keyCode == 37) {
        leftPressed = false;
    }
}

setInterval(draw, 10);
