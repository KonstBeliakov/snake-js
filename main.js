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

function nextTick(){
    if(running){
        setTimeout(() =>{
            draw_board(canvas);
            snake.draw(canvas);
            snake.update();
            running = snake.checkGameOver();
            nextTick();
        }, 100)
    }
}


let running = true
var canvas = document.getElementById('Canvas');

let snake = Snake;

document.body.addEventListener('keydown', (ev) => {
    console.log(`key pressed: ${ev.key}`);
    snake.updateDirection(ev.key);
});

nextTick()
