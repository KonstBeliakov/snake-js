import {
    boardSizeX,
    boardSizeY,
    squareSize,
} from './settings.js'

export let Snake = {
    position: [[6, 5], [5, 5], [4, 5]],
    direction: null,

    draw(canvas){
        var snake_ctx = canvas.getContext("2d");
        snake_ctx.beginPath();
        snake_ctx.fillStyle = '#00ff00';
        for(let square of this.position){
            snake_ctx.rect(square[0] * (squareSize + 2), square[1] * (squareSize + 2), squareSize, squareSize)
        }
        snake_ctx.fill()
    },

    updateDirection(key){
        switch (key){
            case 'w':
                this.direction = "up";
                break
            case 'd':
                this.direction = 'right';
                break
            case 's':
                this.direction = 'down';
                break
            case 'a':
                this.direction = 'left'
                break
        }
        console.log(`snake direction: ${this.direction}`)
    },

    update(){
        console.log('snake update')
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
        if(this.direction !== null){
            this.position.pop();
        }
    },

    checkGameOver(){
        let headX = this.position[0][0];
        let headY = this.position[0][1];

        for(let i = 1;i < this.position.length;i++){
            if(headX === this.position[i][0] && headY === this.position[i][1]){
                return false
            }
        }

        return !(headX < 0 || headX >= boardSizeX || headY < 0 || headY >= boardSizeY);
    }
}