import {ACCELERATING_APPLE, APPLE, SLOWING_APPLE} from "./item.js";
import {SLOW} from "./effect.js";


export const levels = [
    {},
    {
        name: "Level 1: Basic snake",
        description: "You need to eat apples to grow. Eat 3 apples to go to the level 2.",
        speed: 7,
        next_level_requirements(snake){
            return snake.position.length >= 6;
        },
        board: null,
        items: [[APPLE, 100]]
    },
    {
        name: "Level 2: Little faster",
        description: "Increasing the speed. Try eating 5 apples.",
        speed: 10,
        next_level_requirements(snake){
            return snake.position.length >= 8;
        },
        board: null,
        items: [[APPLE, 100]]
    },
    {
        name: "Level 3: Even faster",
        description: "Speed is increasing again. Eat 7 apples to proceed.",
        speed: 13,
        next_level_requirements(snake){
            return snake.position.length >= 10;
        },
        board: null,
        items: [[APPLE, 100]]
    },
    {
        name: "Level 4: Walls",
        description: "Don't crash into the walls! Try eating 7 apples",
        speed: 10,
        next_level_requirements(snake){
            return snake.position.length >= 10;
        },
        board:[
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0],
            [1, 1, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 1, 1],
            [1, 1, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 1, 1],
            [0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
        ],
        items: [[APPLE, 100]]
    },
    {
        name: "Level 5: Cramped room",
        description: "Don't crash into the walls! Try eating 8 apples",
        speed: 10,
        next_level_requirements(snake){
            return snake.position.length >= 11;
        },
        board:[
            [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
            [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
            [1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1],
            [1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1],
            [1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1],
            [1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1],
            [1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1],
            [1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1],
            [1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1],
            [1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1],
            [1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1],
            [1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1],
            [1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1],
            [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
            [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
        ],
        items: [[APPLE, 100]]
    },
    {
        name: "Level 6: Fast food",
        description: "Blue apples speed up the snake for a while. Try to eat 8 apples.",
        speed: 10,
        next_level_requirements(snake){
            return snake.position.length >= 11;
        },
        board: null,
        first_apple: ACCELERATING_APPLE,
        items: [[APPLE, 50], [ACCELERATING_APPLE, 50]]
    },
    {
        name: "Level 7: Let's slow down",
        description: "Yellow apples slow down the snake for a while. Try to eat 8 apples.",
        speed: 12,
        next_level_requirements(snake){
            return snake.position.length >= 11;
        },
        board: null,
        first_apple: SLOWING_APPLE,
        items: [[SLOWING_APPLE, 40], [APPLE, 30], [ACCELERATING_APPLE, 30]]
    }
]