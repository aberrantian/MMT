import { mainScene } from "./scenes/main-menu.js";
import { playScene } from "./scenes/play.js";

export function change (scene) {
    activeScene.hidden = true;
    activeScene.classList.remove('active-scene');

    activeScene = scene;
    
    activeScene.hidden = false;
    activeScene.classList.add('active-scene');
};

export const scene = {
    mainScene: mainScene,
    playScene: playScene,
};

export let activeScene = scene.mainScene;