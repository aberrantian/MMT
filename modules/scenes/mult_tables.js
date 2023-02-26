import { change, scene } from "../scene_mgr.js";
import { create } from "../create.js";

export const multTables = create.div('mult-tables');

const mainMenuBtn = create.btn('main-menu-button', null, 'main menu');
mainMenuBtn.addEventListener('click', () => {
    change(scene.mainMenu);
});

multTables.appendChild(mainMenuBtn);