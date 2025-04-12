const canvas = document.getElementById("gameCanvas");
const ctx = canvas.getContext("2d");

const carImg = new Image();
carImg.src = "car.png";
const obstacleImg = new Image();
obstacleImg.src = "obstacle.png";
const rewardImg = new Image();
rewardImg.src = "reward.png";

const car = {
    x: canvas.width / 2 - 25,
    y: canvas.height - 150,
    width: 50,
    height: 80,
    speed: 2,
    angle: 0
};

let score = 0;
let obstacles = [];
let rewards = [];

function randomPosition() {
    return Math.floor(Math.random() * (canvas.width - 50));
}

function spawnObstacle() {
    obstacles.push({ x: randomPosition(), y: -100 });
}

function spawnReward() {
    rewards.push({ x: randomPosition(), y: -100 });
}

function drawCar() {
    ctx.save();
    ctx.translate(car.x + car.width / 2, car.y + car.height / 2);
    ctx.rotate(car.angle * Math.PI / 180);
    ctx.drawImage(carImg, -car.width / 2, -car.height / 2, car.width, car.height);
    ctx.restore();
}

function drawObstacles() {
    obstacles.forEach(o => {
        ctx.drawImage(obstacleImg, o.x, o.y, 50, 50);
        o.y += car.speed;
    });
}

function drawRewards() {
    rewards.forEach(r => {
        ctx.drawImage(rewardImg, r.x, r.y, 40, 40);
        r.y += car.speed;
    });
}

function checkCollisions() {
    obstacles.forEach(o => {
        if (car.x < o.x + 50 && car.x + car.width > o.x &&
            car.y < o.y + 50 && car.y + car.height > o.y) {
            alert("Game Over! Final Score: " + score);
            document.location.reload();
        }
    });

    rewards = rewards.filter(r => {
        if (car.x < r.x + 40 && car.x + car.width > r.x &&
            car.y < r.y + 40 && car.y + car.height > r.y) {
            score += 10;
            document.getElementById("score").innerText = "Score: " + score;
            return false;
        }
        return true;
    });
}

function update() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    drawCar();
    drawObstacles();
    drawRewards();
    checkCollisions();
}

setInterval(() => {
    if (Math.random() < 0.05) spawnObstacle();
    if (Math.random() < 0.03) spawnReward();
}, 500);

function gameLoop() {
    update();
    requestAnimationFrame(gameLoop);
}

document.addEventListener("keydown", (e) => {
    if (e.key === "ArrowLeft") {
        car.x -= 20;
        car.angle = -15;
    }
    if (e.key === "ArrowRight") {
        car.x += 20;
        car.angle = 15;
    }
    if (e.key === "ArrowUp") {
        car.angle = 0;
    }
    if (e.key === "ArrowDown") {
        car.angle = 180;
    }
    if (e.ctrlKey) {
        car.speed = 5;
    }
});

document.addEventListener("keyup", (e) => {
    if (!e.ctrlKey) {
        car.speed = 2;
    }
});

carImg.onload = () => {
    gameLoop();
};