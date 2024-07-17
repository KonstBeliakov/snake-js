import {boardSizeX, boardSizeY, squareSize,} from './settings.js'
import {Snake} from "./snake.js";


export let Board = {
    squares: [],
    running: true,
    foodX: 8,
    foodY: 5,
    snake: Snake,
    canvas: document.getElementById('Canvas'),

    drawFood(){
        const food_ctx = this.canvas.getContext("2d");
        food_ctx.beginPath();
        food_ctx.fillStyle = '#ff1111';
        food_ctx.rect(this.foodX * (squareSize + 2), this.foodY * (squareSize + 2), squareSize, squareSize)
        food_ctx.fill()
    },

    draw(canvas) {
        const board_ctx = this.canvas.getContext("2d");
        board_ctx.beginPath();
        board_ctx.fillStyle = '#666666';
        for(let i = 0;i < boardSizeX;i ++){
            for(let j = 0;j < boardSizeY;j ++){
                board_ctx.rect(i * (squareSize + 2), j * (squareSize + 2), squareSize, squareSize);
            }
        }
        board_ctx.fill()

        this.drawFood(canvas);
    },

    main_loop(){
        document.body.addEventListener('keydown', (ev) => {
            console.log(`key pressed: ${ev.key}`);
            this.snake.updateDirection(ev.key);
        });
        this.next_tick()
    },

    next_tick(){
        if(!this.running) { // game over
            const ctx = this.canvas.getContext("2d");
            const img = new Image();
            img.onload = function(){
                ctx.drawImage(img,0,0);
            };
            img.src = "/game_over.png";
        }else{
            setTimeout(() =>{
                this.draw();
                this.snake.draw(this.canvas);
                this.drawFood();
                this.snake.update(this.foodX, this.foodY);
                this.running = this.snake.checkGameOver();

                if (this.foodX === this.snake.position[0][0] && this.foodY === this.snake.position[0][1]){
                    let good_position = false
                    while(!good_position){
                        this.foodX = Math.floor(Math.random() * boardSizeX)
                        this.foodY = Math.floor(Math.random() * boardSizeY)

                        good_position = true
                        for(let square of this.snake.position){
                            if(square[0] === this.foodX && square[1] === this.foodY){
                                good_position = false;
                                break;
                            }
                        }
                    }
                }
                this.next_tick();
            }, 100)
        }
    },
}

