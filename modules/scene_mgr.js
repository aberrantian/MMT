import { mainMenu } from "./scenes/main_menu.js"
import { arithmetic } from "./scenes/arithmetic.js";
import { multTables } from "./scenes/mult_tables.js";
import { unitCon } from "./scenes/unit_con.js";
import { percentages } from "./scenes/percentages.js";
import { settings } from "./scenes/settings.js";
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
    arithmetic: arithmetic,
    multTables: multTables,
    unitCon: unitCon,
    percentages: percentages,
    settings: settings,
    about: about,
};

export let activeScene = scene.mainMenu;