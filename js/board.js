import {boardSizeX, boardSizeY, squareSize,} from './settings.js'
import {Snake} from "./snake.js";
import {levels} from './levels.js'
import {update_level_description} from './main.js'


export let Board = {
    snake: Snake,
    canvas: document.getElementById('Canvas'),
    squares: null,

    init(level){
        update_level_description(level);
        this.level = level;
        this.delay = levels[level].delay;
        this.snake.init(level);
        this.next_level = false;
        this.foodX = 5;
        this.foodY = 8;
        this.running = true;

        if(levels[level].board !== null){
            console.log('board loaded')
            this.squares = levels[level].board;
        }else{
            console.log('bord didn\'t load')
            this.squares = []
            for(let i = 0;i < boardSizeY;i ++){
                let t = []
                for(let j = 0;j < boardSizeX;j ++){
                    t.push(0)
                }
                this.squares.push(t)
            }
        }

        console.log(this.squares)
    },

    drawFood(){
        const food_ctx = this.canvas.getContext("2d");
        food_ctx.beginPath();
        food_ctx.fillStyle = '#ff1111';
        food_ctx.rect(this.foodX * (squareSize + 2), this.foodY * (squareSize + 2), squareSize, squareSize)
        food_ctx.fill()
    },

    draw(canvas) {
        // drawing empty squares of the board
        const board_ctx = this.canvas.getContext("2d");
        board_ctx.beginPath();
        board_ctx.fillStyle = '#666666';

        for(let i = 0;i < boardSizeX;i ++){
            for(let j = 0;j < boardSizeY;j ++){
                if(this.squares[i][j] !== 1)
                    board_ctx.rect(i * (squareSize + 2), j * (squareSize + 2), squareSize, squareSize);
            }
        }
        board_ctx.fill()

        // drawing walls
        const wall_ctx = this.canvas.getContext("2d");
        wall_ctx.beginPath();
        wall_ctx.fillStyle = '#222222';
        for(let i = 0;i < boardSizeX;i ++){
            for(let j = 0;j < boardSizeY;j ++){
                if(this.squares[i][j] === 1)
                    wall_ctx.rect(i * (squareSize + 2), j * (squareSize + 2), squareSize, squareSize)
            }
        }
        wall_ctx.fill()

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
                this.running = this.snake.checkGameOver(this);

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
                        if(this.squares[this.foodX][this.foodY] !== 0)
                            good_position = false
                    }
                }
                if(levels[this.level].next_level_requirements(this.snake)){
                    this.level++;
                    this.init(this.level);
                }
                this.next_tick();
            }, this.delay)
        }
    },
}

