import { change, scene } from "../scene_mgr.js";
import { create } from "../create.js";

export const play = create.div('play');

const mainMenuBtn = create.btn(null, null, 'main menu');
mainMenuBtn.addEventListener('click', () => {
    change(scene.mainMenu);
});

create.appends(play, mainMenuBtn);