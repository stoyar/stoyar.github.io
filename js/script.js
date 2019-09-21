let canvas = document.getElementById('myCanvas');
let ctx = canvas.getContext('2d');

let dx = 2;
let dy = 2;
let ballRadius = 60;
let x = 0;
let y = 0;
let z = ballRadius;
let balls = 20;

function drawBall() {
    ctx.beginPath();
    ctx.arc(x, y, ballRadius, 0, Math.PI*2);
    ctx.fillStyle = '#0095dd';
    ctx.fill();
    ctx.stroke();
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
    }
    if(dx + x > canvas.width-ballRadius || dx + x < ballRadius) {
        dx = -dx;
    }
}
    x += dx;
    y += dy;
    
}
setInterval(draw, 10);
