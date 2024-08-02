import {boardSizeX, boardSizeY, squareSize,} from './settings.js'
import {Snake} from "./snake.js";
import {levels} from './levels.js'
import {Item, APPLE} from './item.js'
import {generate_random, draw_square, dist, hexToRgb} from './utils.js'


export class Board{
    constructor(level, app) {
        this.app = app;
        this.snake = new Snake(level, app);

        this.bg_color = "#202020"

        this.init(level);
    }

    init(level){
        this.canvas = document.getElementById('Canvas');

        const context = this.canvas.getContext('2d');
        context.clearRect(0, 0, this.canvas.width, this.canvas.height);

        this.level = level;
        this.snake.init(level, this.app);

        let item_position = [5, 8]
        if(levels[level].first_item_pos){
            item_position = levels[level].first_item_pos
        }

        if(levels[level].first_item){
            this.item = new Item(item_position[0], item_position[1], levels[level].first_item, this.canvas, this);
        }else{
            this.item = new Item(item_position[0], item_position[1], APPLE, this.canvas, this);
        }

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
    }

    drawFood(){
        this.item.draw(this.canvas)
    }

    draw_square(x, y, color, darkness){
        let color1 = color;
        if(darkness){
            let [bg_r, bg_g, bg_b] = [hexToRgb(this.bg_color).r, hexToRgb(this.bg_color).g, hexToRgb(this.bg_color).b];
            let rgb_color = hexToRgb(color);
            let d = dist(this.snake.position[0][0], this.snake.position[0][1], x, y);
            let brightness = 1 / (1 + (d * (0.3 * (darkness - 1)) + (0.05 + 0.2 * (darkness - 1)) * d * d) + (darkness - 1) * 0.02 * x * x * x);
            color1 = `rgb(${(rgb_color.r - bg_r) * brightness + bg_r}, ${(rgb_color.g - bg_g) * brightness + bg_g}, ${(rgb_color.b - bg_b) * brightness + bg_b})`
        }
        draw_square(this.canvas, x, y, squareSize, squareSize, color1);
    }

    draw(canvas) {
        // drawing empty squares of the board
        for(let i = 0;i < boardSizeX;i ++){
            for(let j = 0;j < boardSizeY;j ++){
                if(this.squares[i][j] !== 1)
                    this.draw_square(i, j, '#666666', this.snake.darkness);
            }
        }

        // drawing walls
        for(let i = 0;i < boardSizeX;i ++){
            for(let j = 0;j < boardSizeY;j ++){
                if(this.squares[i][j] === 1)
                    draw_square(this.canvas, i, j, squareSize, squareSize, '#222222');
            }
        }

        this.drawFood(canvas);
    }

    main_loop(){
        document.body.addEventListener('keydown', (ev) => {
            console.log(`key pressed: ${ev.key}`);
            this.snake.updateDirection(ev.key);
        });
        this.next_tick()
    }

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
                this.snake.draw();
                this.drawFood();
                this.snake.update(this.item);
                this.running = this.snake.checkGameOver(this);

                if (this.item.x === this.snake.position[0][0] && this.item.y === this.snake.position[0][1]){
                    this.item.move(this);
                    this.item.change_type(generate_random(levels[this.level].items))
                }

                this.app.show_snake_effects(this.snake.effects)

                if(levels[this.level].next_level_requirements(this.snake))
                    this.app.start_level(this.level + 1);
                else
                    this.next_tick();
            }, (1000 / this.snake.speed));
        }
    }
}

