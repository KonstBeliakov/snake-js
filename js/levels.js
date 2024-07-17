
export const levels = [
    {},
    {
        name: "Level 1: Basic snake",
        description: "You need to eat apples to grow. Eat 3 apples to go to the level 2.",
        delay: 150,
        next_level_requirements(snake){
            return snake.position.length >= 6;
        },
    },
    {
        name: "Level 2: Little faster",
        description: "Increasing the speed. Try eating 5 apples.",
        delay: 100,
        next_level_requirements(snake){
            return snake.position.length >= 8;
        },
    },
    {
        name: "Level 3: Even faster",
        description: "Speed is increasing again. Eat 7 apples to proceed.",
        delay: 75,
        next_level_requirements(snake){
            return snake.position.length >= 10;
        },
    },
]