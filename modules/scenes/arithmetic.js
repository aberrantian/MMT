import { change, scene } from "../scene_mgr.js";
import { create } from "../create.js";

export const arithmetic = create.div('arithmetic');

const mainMenuBtn = create.btn('main-menu-button', null, 'main menu');
mainMenuBtn.addEventListener('click', () => {
    change(scene.mainMenu);
});

arithmetic.appendChild(mainMenuBtn);