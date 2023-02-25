import { change, scene } from "../scene_mgr.js";

export const about = document.createElement('div');
about.setAttribute('id', 'about');

const mainMenuBtn = document.createElement('div');
mainMenuBtn.setAttribute('id', 'main-menu-button');
mainMenuBtn.setAttribute('class', 'button');
mainMenuBtn.textContent = 'main menu';
mainMenuBtn.addEventListener('click', () => {
    change(scene.mainMenu);
});

about.appendChild(mainMenuBtn);