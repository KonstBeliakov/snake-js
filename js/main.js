import {Board} from './board.js'

var buttons = [];
for(let i = 0;i < 10;i ++){
    buttons.push(document.createElement("button"));
    buttons[i].textContent = `Уровень ${i + 1}`;

    buttons[i].addEventListener('click', () => {
        document.getElementById('levels').style.display = 'none';

        console.log(`level chosen: ${i + 1}`);
        Board.init(i + 1);
        Board.main_loop();
    });

    document.getElementById('levels').append(buttons[i]);
}