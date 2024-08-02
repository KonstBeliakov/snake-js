// --------------- CONSTANTS ---------------
export const FAST = 0;
export const SLOW = 1;
export const DISORIENTATION = 2;
export const DARKNESS = 3;
// -----------------------------------------


export class Effect{
    constructor(type, time, snake){
        this.type = type;
        this.time = time;
        this.snake = snake;
        const currentDate = new Date();
        this.time_start =  currentDate.getTime();

        switch(type){
            case FAST:
                this.name = 'Fast'
                snake.speed *= 1.5;
                break;
            case SLOW:
                this.name = 'Slow'
                snake.speed /= 1.5;
                break;
            case DISORIENTATION:
                this.name = 'Disoriented'
                snake.disorientation = true;
                break;
            case DARKNESS:
                this.name = 'Darkness'
                snake.darkness = true;
                break;
        }
    }

    is_over(){
        const currentDate = new Date();
        if(currentDate.getTime() - this.time_start > this.time){
            switch(this.type){
                case FAST:
                    this.snake.speed /= 1.5;
                    break;
                case SLOW:
                    this.snake.speed *= 1.5;
                    break;
                case DISORIENTATION:
                    this.snake.disorientation = false;
                    break;
                case DARKNESS:
                    this.snake.darkness = false;
                    break;
            }
            return true
        }
        return false
    }
}