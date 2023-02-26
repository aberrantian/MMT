import { mainMenu } from "./scenes/main_menu.js"
import { about } from "./scenes/about.js";

export function change (scene) {
    activeScene.hidden = true;
    activeScene.classList.remove('active-scene');

    activeScene = scene;
    
    activeScene.hidden = false;
    activeScene.classList.add('active-scene');
};

export const scene = {
    mainMenu: mainMenu,
    about: about,
};

export let activeScene = scene.mainMenu;