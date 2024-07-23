// --------------- CONSTANTS ---------------
export const FAST = 0;
export const SLOW = 1;
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
                snake.speed *= 1.5;
                break;
            case SLOW:
                snake.speed /= 1.5;
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
            }
            return true
        }
        return false
    }
}