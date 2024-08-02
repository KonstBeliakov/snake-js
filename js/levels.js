import {ACCELERATING_APPLE, APPLE, DARKNESS_APPLE, DISORIENTATION_APPLE, SLOWING_APPLE} from "./item.js";


export const levels = [
    {},
    {
        name: "Level 1: Basic snake",
        special: true,
        description: "You need to eat apples to grow. Eat 3 apples to go to the level 2.",
        speed: 7,
        max: 6,
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
        max: 8,
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
        max: 10,
        next_level_requirements(snake){
            return snake.position.length >= 10;
        },
        board: null,
        items: [[APPLE, 100]]
    },
    {
        name: "Level 4: Walls",
        special: true,
        description: "Don't crash into the walls! Try eating 7 apples",
        speed: 10,
        max: 10,
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
        max: 11,
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
        special: true,
        description: "Blue apples speed up the snake for a while. Try to eat 8 apples.",
        speed: 10,
        max: 11,
        next_level_requirements(snake){
            return snake.position.length >= 11;
        },
        board: null,
        first_apple: ACCELERATING_APPLE,
        items: [[ACCELERATING_APPLE, 100]]
    },
    {
        name: "Level 7: Let's slow down",
        special: true,
        description: "Yellow apples slow down the snake for a while. Try to eat 5 apples.",
        speed: 12,
        max: 8,
        next_level_requirements(snake){
            return snake.position.length >= 8;
        },
        board: null,
        first_item: SLOWING_APPLE,
        items: [[SLOWING_APPLE, 100]]
    },
    {
        name: "Level 8: Cave",
        description: "Acceleration and deceleration on a map with many walls. Need 8 apples to move to the next level",
        speed: 10,
        max: 11,
        next_level_requirements(snake){
            return snake.position.length >= 11;
        },
        board: [
            [1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1],
            [1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1],
            [1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
            [1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1],
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1],
            [1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            [1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1],
            [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1],
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
            [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1],
            [1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1],
            [1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1]
        ],
        first_apple: ACCELERATING_APPLE,
        items: [[SLOWING_APPLE, 40], [APPLE, 20], [ACCELERATING_APPLE, 40]]
    },
    {
        name: "Level 9: Narrow passage",
        description: "Can you play with high precision at varying speeds? You need to eat 8 apples to pass.",
        speed: 10,
        max: 11,
        next_level_requirements(snake){
            return snake.position.length >= 11;
        },
        board: [
            [0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0]
        ],
        first_apple: ACCELERATING_APPLE,
        items: [[SLOWING_APPLE, 30], [APPLE, 30], [ACCELERATING_APPLE, 40]]
    },
    {
        name: "Level 10: Circle",
        description: "You need to eat 8 apples to pass.",
        speed: 10,
        max: 11,
        next_level_requirements(snake){
            return snake.position.length >= 11;
        },
        board: [
            [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
            [1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1],
            [1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1],
            [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
            [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
            [1, 0, 0, 0, 0, 1, 1, 1, 1, 1, 0, 0, 0, 0, 1],
            [1, 0, 0, 0, 0, 1, 1, 1, 1, 1, 0, 0, 0, 0, 1],
            [1, 0, 0, 0, 0, 1, 1, 1, 1, 1, 0, 0, 0, 0, 1],
            [1, 0, 0, 0, 0, 1, 1, 1, 1, 1, 0, 0, 0, 0, 1],
            [1, 0, 0, 0, 0, 1, 1, 1, 1, 1, 0, 0, 0, 0, 1],
            [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
            [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
            [1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1],
            [1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1],
            [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]
        ],
        first_item_pos: [11, 2],
        first_apple: ACCELERATING_APPLE,
        snake_position: [[6, 2], [5, 2], [4, 2]],
        items: [[SLOWING_APPLE, 30], [APPLE, 30], [ACCELERATING_APPLE, 40]]
    },
    {
        name: 'Level 11: In the dark',
        special: true,
        description: "Eating a dark purple item casts a darkness effect on you<br>You need to eat <b>10</b> apples to pass.",
        speed: 10,
        max: 13,
        next_level_requirements(snake){
            return snake.position.length >= 13;
        },
        board: null,
        first_apple: DARKNESS_APPLE,
        items: [[DARKNESS_APPLE, 100]]
    },
    {
        name: 'Level 12: Dark cave',
        description: "Level with only darkness items and lots of walls.<br>You need to eat <b>8</b> apples to pass.",
        speed: 10,
        max: 11,
        next_level_requirements(snake){
            return snake.position.length >= 11;
        },
        board: [
            [1, 1, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1],
            [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 1],
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 1],
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0, 0, 0, 0],
            [1, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0, 0],
            [1, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0],
            [1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0],
            [1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0],
            [1, 1, 1, 1, 0, 0, 1, 1, 1, 1, 1, 1, 0, 0, 0]
        ],
        first_apple: DARKNESS_APPLE,
        items: [[DARKNESS_APPLE, 100]]
    },
    {
        name: 'Level 13: Disorientated',
        special: true,
        description: "Eating a purple item inverts the controls for a while<br>You need to eat 4 apples to pass.",
        speed: 10,
        max: 7,
        next_level_requirements(snake){
            return snake.position.length >= 7;
        },
        board: null,
        first_apple: DISORIENTATION_APPLE,
        items: [[DISORIENTATION_APPLE, 100]]
    },

    {
        name: 'Level 14: All at once',
        description: "All previously unlocked items are found on this level.<br>You need to eat <b>8</b> apples to pass.",
        speed: 10,
        max: 11,
        next_level_requirements(snake){
            return snake.position.length >= 11;
        },
        board: null,
        first_apple: DARKNESS_APPLE,
        items: [[SLOWING_APPLE, 25], [DISORIENTATION_APPLE, 25], [ACCELERATING_APPLE, 25], [DARKNESS_APPLE, 25]]
    },
    {
        name: 'Level 15: Dark and confusing',
        description: "Only darkness and disorientation items.<br>You need to eat <b>8</b> apples to pass.",
        speed: 10,
        max: 11,
        next_level_requirements(snake){
            return snake.position.length >= 11;
        },
        board: [
            [0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
        ],
        first_apple: DARKNESS_APPLE,
        items: [[DISORIENTATION_APPLE, 40], [DARKNESS_APPLE, 60]]
    },
    {
        name: 'Level 16: Coridor',
        description: "All previously unlocked items are found on this level.<br>Speed is slightly reduced<br>You need to eat <b>8</b> apples to pass.",
        speed: 8,
        max: 11,
        next_level_requirements(snake){
            return snake.position.length >= 11;
        },
        board: [
            [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
            [1, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0],
            [1, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0],
            [1, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0],
            [1, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0],
            [1, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            [1, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0],
            [1, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0],
            [1, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0],
            [1, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0],
            [1, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0],
            [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
        ],
        first_apple: DARKNESS_APPLE,
        items: [[DISORIENTATION_APPLE, 40], [DARKNESS_APPLE, 60]]
    },
]