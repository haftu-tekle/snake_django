const canvas = document.getElementById('gameCanvas'); 
const ctx = canvas.getContext('2d');                 

const TILE_SIZE = 20;     
const CANVAS_SIZE = 500;  
const GAME_SPEED = 100;   

let snake = [{ x: 240, y: 240 }]; 
let food = {};                    
let direction = { x: 0, y: -TILE_SIZE };
let score = 0;                    
let gameRunning = true;           

const scoreDisplay = document.getElementById('scoreDisplay');

const keyMap = {
    'ArrowUp':    { x: 0, y: -TILE_SIZE },
    'ArrowDown':  { x: 0, y: TILE_SIZE },
    'ArrowLeft':  { x: -TILE_SIZE, y: 0 },
    'ArrowRight': { x: TILE_SIZE, y: 0 },
    'w': { x: 0, y: -TILE_SIZE },
    's': { x: 0, y: TILE_SIZE },
    'a': { x: -TILE_SIZE, y: 0 },
    'd': { x: TILE_SIZE, y: 0 }
};


function getRandomFoodPosition() {
    let x, y;
    let collisionWithSnake;

    do {
        x = Math.floor(Math.random() * (CANVAS_SIZE / TILE_SIZE)) * TILE_SIZE;
        y = Math.floor(Math.random() * (CANVAS_SIZE / TILE_SIZE)) * TILE_SIZE;

        collisionWithSnake = snake.some(segment => segment.x === x && segment.y === y);

    } while (collisionWithSnake);
    return { x, y };
}

function draw() {
   
    ctx.fillStyle = "#1d3557"; // Dark blue
    ctx.fillRect(0, 0, CANVAS_SIZE, CANVAS_SIZE);

    ctx.fillStyle = "#e63946"; 
    snake.forEach(segment => {
        ctx.fillRect(segment.x, segment.y, TILE_SIZE, TILE_SIZE);
        ctx.strokeStyle = "#a8dadc"; 
        ctx.strokeRect(segment.x, segment.y, TILE_SIZE, TILE_SIZE);
    });

    ctx.fillStyle = "#2a9d8f"; 
    ctx.fillRect(food.x, food.y, TILE_SIZE, TILE_SIZE);
    ctx.strokeStyle = "#f4a261"; 
    ctx.strokeRect(food.x, food.y, TILE_SIZE, TILE_SIZE);
}

function update() {
    if (!gameRunning) return;

    const head = {
        x: snake[0].x + direction.x,
        y: snake[0].y + direction.y
    };

    snake.unshift(head);


    const didEatFood = head.x === food.x && head.y === food.y;
    if (didEatFood) {
        score += 10; 
        scoreDisplay.textContent = `Score: ${score}`; 
        food = getRandomFoodPosition(); 
    } else {
        snake.pop();
    }

    const hitWall =
        head.x < 0 || head.x >= CANVAS_SIZE ||
        head.y < 0 || head.y >= CANVAS_SIZE;

    if (hitWall) {
        gameOver();
        return;
    }

  
    for (let i = 4; i < snake.length; i++) {
        if (head.x === snake[i].x && head.y === snake[i].y) {
            gameOver();
            return;
        }
    }
}

function gameOver() {
    gameRunning = false;

    alert(`Game Over! Your final score: ${score}\nPress OK to restart.`);
    resetGame();
}

function resetGame() {
    snake = [{ x: 240, y: 240 }]; 
    direction = { x: 0, y: -TILE_SIZE }; 
    score = 0;                        
    scoreDisplay.textContent = `Score: ${score}`;
    food = getRandomFoodPosition();    
    gameRunning = true;                
    draw(); 
}


function changeDirection(event) {
    const newDirection = keyMap[event.key];


    if (
        newDirection &&
        (newDirection.x !== -direction.x || newDirection.y !== -direction.y)
    ) {
        direction = newDirection;
    }
}
document.addEventListener('keydown', changeDirection);


function gameloop() {
    update(); 
    draw();   
    setTimeout(gameloop, GAME_SPEED);
}

food = getRandomFoodPosition(); 
gameloop();