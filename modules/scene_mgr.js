import { arithmetic } from "./scenes/arithmetic.js";
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
    arithmetic: arithmetic,
    settings: settings,
    play: play,
};

export let activeScene = scene.arithmetic;