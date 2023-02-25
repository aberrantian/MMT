import { mainMenu } from "./scenes/main_menu.js"
import { about } from "./scenes/about.js";

export function change (scene) {
    activeScene.hidden = true;
    activeScene = scene;
    activeScene.hidden = false;
};

export const scene = {
    mainMenu: mainMenu,
    about: about,
};

export let activeScene = scene.mainMenu;