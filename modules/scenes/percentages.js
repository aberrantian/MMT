import { change, scene } from "../scene_mgr.js";
import { create } from "../create.js";

export const percentages = create.div('percentages');

const mainMenuBtn = create.btn('main-menu-button', null, 'main menu');
mainMenuBtn.addEventListener('click', () => {
    change(scene.mainMenu);
});

percentages.appendChild(mainMenuBtn);