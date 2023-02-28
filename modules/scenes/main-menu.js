import { change, scene } from "../scene_mgr.js";
import { create } from "../create.js";

export const mainScene = create.div('main-menu');

const header = create.div(null, 'header', null);
const scoreboard = create.div('scoreboard', null, 'scoreboard');
header.appendChild(scoreboard);

const main = create.div(null, 'main', null);
const buttonContainer = create.div(null, 'button-container', null);
const startBtn = create.btn(null, null, 'start');
create.appends(buttonContainer, startBtn);
create.appends(main, buttonContainer);

create.appends(mainScene, header, main);

startBtn.addEventListener('click', () => {
    change(scene.playScene);
    let sessionLength = 10;
    let session = setInterval(() => {
        sessionLength--;
        if (sessionLength < 0) {
            change(scene.mainScene);
            clearInterval(session);
        };
    }, 1000);
});
