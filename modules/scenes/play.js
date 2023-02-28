import { change, scene } from "../scene_mgr.js";
import { create } from "../create.js";

export const playScene = create.div('play');

const mainMenuBtn = create.btn(null, null, 'main menu');
mainMenuBtn.addEventListener('click', () => {
    change(scene.mainScene);
});

create.appends(playScene, mainMenuBtn);