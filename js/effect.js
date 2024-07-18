// --------------- CONSTANTS ---------------
export const ACCELERATED = 0;
// -----------------------------------------


export let Effect = {
    type: null,

    init(type, snake){
        this.type = type;
        if(type === ACCELERATED)
            snake.speed *= 1.5;
    }
}