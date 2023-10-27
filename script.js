const paddleLeft = document.getElementById("paddle-left");
const paddleRight = document.getElementById("paddle-right");
const ball = document.getElementById("ball");

let ballX = 300;
let ballY = 200;
let ballSpeedX = 5;
let ballSpeedY = 2;
const paddleSpeed = 10;

function update() {
    ballX += ballSpeedX;
    ballY += ballSpeedY;

    // Ball collisions with top and bottom walls
    if (ballY <= 0 || ballY >= 400) {
        ballSpeedY = -ballSpeedY;
    }

    // Ball collisions with paddles
    if (
        (ballX <= 10 && ballY >= paddleLeft.offsetTop && ballY <= paddleLeft.offsetTop + 100) ||
        (ballX >= 570 && ballY >= paddleRight.offsetTop && ballY <= paddleRight.offsetTop + 100)
    ) {
        ballSpeedX = -ballSpeedX;
    }

    // Ball out of bounds (scoring)
    if (ballX <= 0 || ballX >= 600) {
        // Reset ball position
        ballX = 300;
        ballY = 200;
        ballSpeedX = -ballSpeedX;
    }

    ball.style.left = ballX + "px";
    ball.style.top = ballY + "px";
}

document.addEventListener("keydown", (e) => {
    if (e.key === "ArrowUp") {
        if (paddleRight.offsetTop - paddleSpeed >= 0) {
            paddleRight.style.top = paddleRight.offsetTop - paddleSpeed + "px";
        }
    } else if (e.key === "ArrowDown") {
        if (paddleRight.offsetTop + 100 + paddleSpeed <= 400) {
            paddleRight.style.top = paddleRight.offsetTop + paddleSpeed + "px";
        }
    }
});

function gameLoop() {
    update();
    requestAnimationFrame(gameLoop);
}

gameLoop();
