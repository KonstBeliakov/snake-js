import {boardSizeX, boardSizeY, squareSize,} from './settings.js'
import {Snake} from "./snake.js";
import {levels} from './levels.js'
import {Item, APPLE, ACCELERATING_APPLE} from './item.js'
import {update_level_description} from './main.js'
import {generate_random} from './utils.js'


export let Board = {
    snake: Snake,
    canvas: document.getElementById('Canvas'),
    squares: null,

    init(level){
        update_level_description(level);
        this.level = level;
        this.snake.init(level);
        this.next_level = false;
        this.item = Item;
        this.item.init(5, 8, APPLE, this.canvas);
        this.running = true;

        if(levels[level].board !== null){
            console.log('board loaded')
            this.squares = levels[level].board;
        }else{
            console.log('bord didn\'t load')
            this.squares = []
            for(let i = 0;i < boardSizeY;i ++){
                let t = []
                for(let j = 0;j < boardSizeX;j ++)
                    t.push(0)
                this.squares.push(t)
            }
        }

        console.log(this.squares)
    },

    drawFood(){
        this.item.draw(this.canvas)
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
            setTimeout(() => {
                this.draw();
                this.snake.draw(this.canvas);
                this.drawFood();
                this.snake.update(this.item);
                this.running = this.snake.checkGameOver(this);

                if (this.item.x === this.snake.position[0][0] && this.item.y === this.snake.position[0][1]){
                    this.item.move(this);
                    this.item.change_type(generate_random(levels[this.level].items))
                }

                if(levels[this.level].next_level_requirements(this.snake)){
                    this.level++;
                    this.init(this.level);
                }
                this.next_tick();
            }, (1000 / this.snake.speed));
        }
    },
}

