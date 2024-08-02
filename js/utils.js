import {boardSizeX, boardSizeY, squareSize} from "./settings.js";

export function generate_random(items){
    let weight_sum = 0;
    let borders = [];

    for(let item of items) {
        weight_sum += item[1];
        borders.push(weight_sum);
    }

    let random_number = Math.random() * weight_sum;
    for(let i = 0; i < borders.length; i++) {
        if(random_number < borders[i])
            return items[i][0];
    }
}

let ctx = []
for(let i = 0;i <= boardSizeX;i ++){
    let t = []
    for(let j = 0;j <= boardSizeY;j ++){
        t.push(document.getElementById('Canvas').getContext("2d"))
    }
    ctx.push(t)
}

export function draw_square(canvas, x, y, sizeX, sizeY, color){
    ctx[x][y].fillStyle = color
    ctx[x][y].beginPath();
    ctx[x][y].rect(x * (squareSize + 2), y * (squareSize + 2), sizeX, sizeY);
    ctx[x][y].fill()
}

export function dist(x1, y1, x2, y2){
    return Math.sqrt(Math.pow(x1 - x2, 2) + Math.pow(y1 - y2, 2))
}

export function hexToRgb(hex) {
    let result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
    return result ? {
        r: parseInt(result[1], 16),
        g: parseInt(result[2], 16),
        b: parseInt(result[3], 16)
    } : null;
}

export function rgbToHex(r, g, b) {
    return "#" + (1 << 24 | r << 16 | g << 8 | b).toString(16).slice(1);
}
