import {boardSizeX, boardSizeY, squareSize} from "./settings.js";


// --------------- CONSTANTS ---------------
export const APPLE = 0;
export const ACCELERATING_APPLE = 1;
export const SLOWING_APPLE = 2;
// -----------------------------------------


export let Item = {
    init(x, y, type, canvas){
        this.x = x;
        this.y = y;
        this.type = type;
        this.canvas = canvas;
    },

    draw(){
        this.item_ctx = this.canvas.getContext("2d");
        this.item_ctx.beginPath();

        switch(this.type){
            case APPLE:
                this.item_ctx.fillStyle = '#cc3333';
                break;
            case ACCELERATING_APPLE:
                this.item_ctx.fillStyle = '#3333cc';
                break;
            case SLOWING_APPLE:
                this.item_ctx.fillStyle = '#cccc33'
                break;
        }

        this.item_ctx.rect(this.x * (squareSize + 2), this.y * (squareSize + 2), squareSize, squareSize);
        this.item_ctx.fill();
    },

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
    },

    change_type(type) {
        this.type = type;
    },
}