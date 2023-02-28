import { mainMenu } from "./scenes/main-menu.js";
import { play } from "./scenes/play.js";
import { settings } from "./scenes/settings.js";

export function change (scene) {
    activeScene.hidden = true;
    activeScene.classList.remove('active-scene');

    activeScene = scene;
    
    activeScene.hidden = false;
    activeScene.classList.add('active-scene');
};

export const scene = {
    mainMenu: mainMenu,
    settings: settings,
    play: play,
};

export let activeScene = scene.mainMenu;