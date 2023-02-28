import { change, scene } from "../scene_mgr.js";
import { create } from "../create.js";

export const arithmetic = create.div('arithmetic');

const scoreboard = create.div('scoreboard', null, 'scoreboard');
const startBtn = create.btn(null, null, 'start');
const settingsBtn = create.btn(null, null, 'settings');

create.appends(arithmetic, scoreboard, startBtn, settingsBtn);