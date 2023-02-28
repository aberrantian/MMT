import { change, scene } from "../scene_mgr.js";
import { create } from "../create.js";

export const arithmetic = create.div('arithmetic');

const header = create.div(null, 'header', null);
const scoreboard = create.div('scoreboard', null, 'scoreboard');
header.appendChild(scoreboard);

const main = create.div(null, 'main', null);
const buttonContainer = create.div(null, 'button-container', null);
const startBtn = create.btn(null, null, 'start');
const settingsBtn = create.btn(null, null, 'settings');
create.appends(buttonContainer, startBtn, settingsBtn);
create.appends(main, buttonContainer);

create.appends(arithmetic, header, main);