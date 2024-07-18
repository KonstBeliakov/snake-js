// --------------- CONSTANTS ---------------
export const FAST = 0;
export const SLOW = 1;
// -----------------------------------------


export class Effect{
    constructor(type, snake){
        this.type = type;
        switch(type){
            case FAST:
                snake.speed *= 1.5;
                break;
            case SLOW:
                snake.speed /= 1.5;
                break;
        }
    }
}