import {Board} from './board.js'
import {levels} from "./levels.js";


var buttons = [];
for(let i = 0;i < 10;i ++){
    buttons.push(document.createElement("button"));
    buttons[i].classList.add('level-button');
    buttons[i].textContent = levels[i + 1].name;

    if(levels[i + 1].special){
        buttons[i].classList.add("special-level");
    }else{
        buttons[i].classList.add("common-level");
    }

    buttons[i].addEventListener('click', () => {
        document.getElementById('levels').style.display = 'none';

        console.log(`level chosen: ${i + 1}`);

        const board = new Board(i + 1);
        board.main_loop();
    });

    document.getElementById('levels').append(buttons[i]);
}