import { change, scene } from "../scene_mgr.js";
import { create } from "../create.js";

export const unitCon = create.div('unit-con');

const mainMenuBtn = create.btn('main-menu-button', null, 'main menu');
mainMenuBtn.addEventListener('click', () => {
    change(scene.mainMenu);
});

unitCon.appendChild(mainMenuBtn);