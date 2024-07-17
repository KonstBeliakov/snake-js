import {
    boardSizeX,
    boardSizeY,
    squareSize,
} from './settings.js'

export let Snake = {
    init(level){
        this.position = [[6, 5], [5, 5], [4, 5]];
        this.direction = null;
    },

    draw(canvas){
        var snake_ctxs = [];
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

    update(foodX, foodY){
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
        [headX, headY] = this.position[0];

        if(this.direction !== null && !(foodX === headX && foodY === headY)){
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