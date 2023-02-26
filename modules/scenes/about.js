import { change, scene } from "../scene_mgr.js";
import { create } from "../create.js";

export const about = create.div('about');

const mainMenuBtn = create.btn('main-menu-button', null, 'main menu');
mainMenuBtn.addEventListener('click', () => {
    change(scene.mainMenu);
});


const desc = create.div('div1', 'text', 'description');

create.appends(about, mainMenuBtn, desc);