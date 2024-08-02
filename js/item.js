import {boardSizeX, boardSizeY} from "./settings.js";


// --------------- CONSTANTS ---------------
export const APPLE = 0;
export const ACCELERATING_APPLE = 1;
export const SLOWING_APPLE = 2;
export const DISORIENTATION_APPLE = 3;
export const DARKNESS_APPLE = 4;
// -----------------------------------------


export class Item{
    constructor(x, y, type, canvas, app){
        this.x = x;
        this.y = y;
        this.type = type;
        this.canvas = canvas;
        this.app = app;
    }

    draw(){
        this.item_ctx = this.canvas.getContext("2d");
        this.item_ctx.beginPath();

        let color = '#fff'
        switch(this.type){
            case APPLE:
                color = '#cc3333';
                break;
            case ACCELERATING_APPLE:
                color ='#3333cc';
                break;
            case SLOWING_APPLE:
                color = '#cccc33'
                break;
            case DISORIENTATION_APPLE:
                color = '#cc33cc';
                break;
            case DARKNESS_APPLE:
                color = '#330055'
                break;
        }
        this.app.draw_square(this.x, this.y, color, this.app.snake.darkness)
    }

    move(board){
        let good_position = false
        while(!good_position){
            this.x = Math.floor(Math.random() * boardSizeX)
            this.y = Math.floor(Math.random() * boardSizeY)

            good_position = true
            for(let square of board.snake.position){
                if(square[0] === this.x && square[1] === this.y){
                    good_position = false;
                    break;
                }
            }
            if(board.squares[this.x][this.y] !== 0)
                good_position = false
        }
    }

    change_type(type) {
        this.type = type;
    }
}