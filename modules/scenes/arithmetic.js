import { change, scene } from "../scene_mgr.js";
import { create } from "../create.js";

export const arithmetic = create.div('arithmetic');

/* Layout
scoreboard
start
settings
main menu
*/

const scoreboard = create.div('scoreboard', null, 'scoreboard');
const startBtn = create.btn(null, null, 'start');
const settingsBtn = create.btn(null, null, 'settings');

const mainMenuBtn = create.btn('main-menu-button', null, 'main menu');
mainMenuBtn.addEventListener('click', () => {
    change(scene.mainMenu);
});

arithmetic.appendChild(mainMenuBtn);