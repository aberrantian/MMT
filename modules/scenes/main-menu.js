import { change, scene } from "../scene_mgr.js";
import { create } from "../create.js";

export const mainScene = create.div('main-menu');

const header = create.div(null, 'header', null);
const scoreboard = create.div('scoreboard', null, 'scoreboard');
header.appendChild(scoreboard);

const main = create.div(null, 'main', null);
const buttonContainer = create.div(null, 'button-container', null);
const startBtn = create.btn(null, null, 'start');
const settingsBtn = create.btn(null, null, 'settings');
create.appends(buttonContainer, startBtn, settingsBtn);
create.appends(main, buttonContainer);

create.appends(mainScene, header, main);

startBtn.addEventListener('click', () => {
    change(scene.playScene);
    // let session = setTimeout(change(scene.mainMenu), 1000);
});

settingsBtn.addEventListener('click', () => {
    change(scene.settings);
});