import { change, scene } from "../scene_mgr.js";
import { create } from "../create.js";

export const settings = create.div('settings');

const mainMenuBtn = create.btn(null, null, 'main menu');
mainMenuBtn.addEventListener('click', () => {
    change(scene.arithmetic);
});

settings.appendChild(mainMenuBtn);