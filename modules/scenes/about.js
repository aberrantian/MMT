import { change, scene } from "../scene_mgr.js";
import { create } from "../create.js";

export const about = create.div('about');

const mainMenuBtn = create.btn('main-menu-button', null, 'main menu');
mainMenuBtn.addEventListener('click', () => {
    change(scene.mainMenu);
});


const textA = document.createTextNode(`
MMT (Mental Math Trainer) focuses primarily on mental math skills.
Teaching subjects of mathematics is secondary. Here is the
`);

const sourceLink = create.link(null, 'link', 'source code', 'https://github.com/aberrantian/MMT', true);

const textB = document.createTextNode(`
for this app and here is the
`);

const devLink = create.link(null, null, "developer's website", 'https://aberrantian.github.io', true);

const textC = document.createTextNode('.');

const desc = create.p();

create.appends(desc, textA, sourceLink, textB, devLink, textC);
create.appends(about, mainMenuBtn, desc);