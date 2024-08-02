import {
    boardSizeX,
    boardSizeY,
    squareSize,
} from './settings.js'
import {ACCELERATING_APPLE, DARKNESS_APPLE, DISORIENTATION_APPLE, SLOWING_APPLE} from "./item.js";
import {FAST, Effect, SLOW, DARKNESS, DISORIENTATION} from "./effect.js";
import {levels} from "./levels.js";


export class Snake {
    constructor(level, app){
        this.app = app;
        this.init(level);
    }

    init(level){
        this.direction = null;
        this.effects = [];
        if (levels[level].snake_position){
            this.position = JSON.parse(JSON.stringify(levels[level].snake_position));
        }else {
            this.position = [[6, 5], [5, 5], [4, 5]];
        }
        this.speed = levels[level].speed;

        this.disorientation = false;
        this.darkness = false;
    }

    draw(canvas){
        const snake_ctxs = [];
        for(let i = 0; i < this.position.length;i ++){
            snake_ctxs.push(canvas.getContext("2d"))
            snake_ctxs[i].beginPath();
            let g = 255 - i * 10;
            snake_ctxs[i].fillStyle = `rgb(0, ${g}, 0)`;

            let x = this.position[i][0] * (squareSize + 2);
            let y = this.position[i][1] * (squareSize + 2);

            snake_ctxs[i].rect(x, y, squareSize, squareSize)
            snake_ctxs[i].fill()
        }
    }

    updateDirection(key){
        let direction = null
        switch (key){
            case 'w':
                direction = "up";
                break;
            case 'd':
                direction = 'right';
                break;
            case 's':
                direction = 'down';
                break;
            case 'a':
                if(this.direction !== null)
                    direction = 'left'
                break;
        }
        let reversed = {'left': 'right', 'right': 'left', 'up': 'down', 'down': 'up'}
        if(this.disorientation)
            direction = reversed[direction];

        if(direction !== reversed[this.direction])
            this.direction = direction
    }

    update(item){
        let [headX, headY] = this.position[0];
        switch(this.direction) {
            case 'right':
                this.position.unshift([headX + 1, headY]);
                break;
            case 'down':
                this.position.unshift([headX, headY + 1]);
                break;
            case 'left':
                this.position.unshift([headX - 1, headY]);
                break;
            case 'up':
                this.position.unshift([headX, headY - 1]);
                break;
        }
        [headX, headY] = this.position[0];

        if(item.x === headX && item.y === headY){
            this.app.show_level_progress(this.position.length - 3);
            switch (item.type){
                case ACCELERATING_APPLE:
                    this.effects.unshift(new Effect(FAST, 5000, this));
                    break;
                case SLOWING_APPLE:
                    this.effects.unshift(new Effect(SLOW, 5000, this));
                    break;
                case DISORIENTATION_APPLE:
                    this.effects.unshift(new Effect(DISORIENTATION, 5000, this));
                    break;
                case DARKNESS_APPLE:
                    this.effects.unshift(new Effect(DARKNESS, 5000, this));
                    break;
            }
        }else if(this.direction !== null){
            this.position.pop();
        }
        this.checkEffects();
    }

    checkEffects(){
        console.log(this.effects);
        for(let i = this.effects.length - 1;i >= 0;i --){
            console.log(i);
            if(this.effects[i] && this.effects[i].is_over()){
                console.log(`effect ${this.effects[i].type} is over`)
                this.effects.splice(i, 1);
            }
        }
    }

    checkGameOver(board){
        let headX = this.position[0][0];
        let headY = this.position[0][1];

        for(let i = 1;i < this.position.length;i++){
            if(headX === this.position[i][0] && headY === this.position[i][1])
                return false
        }
        if(headX < 0 || headX >= boardSizeX || headY < 0 || headY >= boardSizeY)
            return false;
        else return !(board.squares != null && board.squares[headX][headY] === 1);
    }
}