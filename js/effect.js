// --------------- CONSTANTS ---------------
export const FAST = 0;
export const SLOW = 1;
// -----------------------------------------


export let Effect = {
    type: null,

    init(type, snake){
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