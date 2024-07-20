import {Board} from './board.js'
import {levels} from './levels.js'

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


var buttons = [];
for(let i = 0;i < 10;i ++){
    buttons.push(document.createElement("button"));
    buttons[i].classList.add('level-button');
    buttons[i].textContent = `Level ${i + 1}`;

    buttons[i].addEventListener('click', () => {
        document.getElementById('levels').style.display = 'none';

        console.log(`level chosen: ${i + 1}`);

        const board = new Board(i + 1);
        board.main_loop();
    });

    document.getElementById('levels').append(buttons[i]);
}