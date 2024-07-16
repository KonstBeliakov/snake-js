import {Snake} from './snake.js'
import {
    boardSizeX,
    boardSizeY,
    squareSize,
} from './settings.js'


function draw_board(canvas){
    var board_ctx = canvas.getContext("2d");
    board_ctx.beginPath();
    board_ctx.fillStyle = '#666666';
    for(let i = 0;i < boardSizeX;i ++){
        for(let j = 0;j < boardSizeY;j ++){
            board_ctx.rect(i * (squareSize + 2), j * (squareSize + 2), squareSize, squareSize);
        }
    }
    board_ctx.fill()
}

function drawFood(canvas){
    var food_ctx = canvas.getContext("2d");
    food_ctx.beginPath();
    food_ctx.fillStyle = '#ff1111';
    food_ctx.rect(foodX * (squareSize + 2), foodY * (squareSize + 2), squareSize, squareSize)
    food_ctx.fill()
}

function nextTick(){
    if(!running) {
        var ctx = canvas.getContext("2d");
        var img = new Image();
        img.onload = function(){
            ctx.drawImage(img,0,0);
        };
        img.src = "/game_over.png";
    }else{
        setTimeout(() =>{
            draw_board(canvas);
            snake.draw(canvas);
            drawFood(canvas);
            snake.update(foodX, foodY);
            running = snake.checkGameOver();

            if (foodX === snake.position[0][0] && foodY === snake.position[0][1]){
                let good_position = false
                while(!good_position){
                    foodX = Math.floor(Math.random() * boardSizeX)
                    foodY = Math.floor(Math.random() * boardSizeY)

                    good_position = true
                    for(let square of snake.position){
                        if(square[0] === foodX && square[1] === foodY){
                            good_position = false;
                            break;
                        }
                    }

                }

            }

            nextTick();
        }, 100)
    }
}


let running = true
var canvas = document.getElementById('Canvas');


let snake = Snake;

let foodX = 8;
let foodY = 5;

document.body.addEventListener('keydown', (ev) => {
    console.log(`key pressed: ${ev.key}`);
    snake.updateDirection(ev.key);
});

nextTick()
