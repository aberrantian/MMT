import { change, scene } from "../scene_mgr.js";
import { create } from "../create.js";

export const settingsScene = create.div('settings');

const mainMenuBtn = create.btn(null, null, 'main menu');
mainMenuBtn.addEventListener('click', () => {
    change(scene.mainMenu);
});

settingsScene.appendChild(mainMenuBtn);