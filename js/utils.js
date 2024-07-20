import {levels} from './levels.js'

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


export function update_level_description(level){
    console.log(`update level description. level: ${level}`)

    const level_info = document.getElementById("level_info");
    level_info.innerHTML = '';

    let level_name = document.createElement("h2");
    level_name.textContent = levels[level].name;

    let level_description = document.createElement("p");
    level_description.textContent = levels[level].description;

    level_info.append(level_name)
    level_info.append(level_description)
}
