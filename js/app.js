import {levels} from "./levels.js";
import {Board} from "./board.js";


export class App{
    constructor() {
        this.level = 1;
        this.board = new Board(this.level, this);
    }

    main_menu(){
        console.log('main menu')

        document.getElementById('levels').style.display = 'flex';
        document.getElementById('game').style.display = 'none';
        document.getElementById('levels').innerHTML = '<h2>Choose the level:</h2>';
        const buttons = [];
        for(let i = 0;i < 10;i ++){
            buttons.push(document.createElement("button"));
            buttons[i].classList.add('level_button');
            buttons[i].textContent = levels[i + 1].name;

            if(levels[i + 1].special){
                buttons[i].classList.add("special-level");
            }else{
                buttons[i].classList.add("common-level");
            }

            buttons[i].addEventListener('click', () => {
                this.level = i + 1;
                this.start_level(i + 1);
            });

            document.getElementById('levels').append(buttons[i]);
        }
    }

    start_level(level){
        this.level = level;

        console.log('start')
        console.log(`level chosen: ${level}`);

        document.getElementById('levels').style.display = 'none';
        document.getElementById('game').style.display = 'flex';

        const button_div = document.getElementById('buttons');
        button_div.innerHTML = ''

        const button_restart = document.createElement('button');
        button_restart.textContent = 'Restart';
        button_restart.addEventListener('click', () => {
            this.start_level(level);
        });

        const button_main_menu = document.createElement('button');
        button_main_menu.textContent = 'Main menu';
        button_main_menu.addEventListener('click', () => {
            this.main_menu();
        })

        this.update_level_description(level);
        this.show_level_progress(0);

        button_div.append(button_main_menu);
        button_div.append(button_restart);

        this.board.init(level);
        this.board.main_loop();
    }

    update_level_description(level){
        console.log(`update level description. level: ${level}`)

        const level_info = document.getElementById("level_info");
        level_info.innerHTML = '';

        let level_name = document.createElement("h2");
        level_name.textContent = levels[level].name;

        let level_description = document.createElement("p");
        level_description.textContent = levels[level].description;

        level_info.append(level_name);
        level_info.append(level_description);
    }

    show_level_progress(value){
        let progress_bar = document.getElementById("level_progress_bar");
        progress_bar.max = levels[this.level].max - 3;
        progress_bar.value = value;
    }

    show_snake_effects(effects){
        let effect_div = document.getElementById("effect_div");
        effect_div.innerHTML = '';

        let currentDate = new Date();
        let currentTime = currentDate.getTime();

        for(let effect of effects){
            let effect_text = document.createElement('p');

            console.log(`effect type: ${effect.type}`)

            effect_text.textContent = ['Fast', 'Slow'][effect.type];

            effect_div.append(effect_text);

            let progress_bar = document.createElement("progress");
            progress_bar.value = currentTime - effect.time_start;
            progress_bar.max = effect.time;

            effect_div.append(progress_bar);
        }
    }
}