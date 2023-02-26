import { change, scene } from "../scene_mgr.js";
import { create } from "../create.js";

export const mainMenu = create.div('main-menu');

const arithmeticBtn = create.btn('arithmetic-button', null, 'arithmetic');

const multTablesBtn = create.btn('mult-tables-button', null, 'multiplication tables');

const unitConBtn = create.btn('unit-con-button', null, 'unit conversion');

const percentagesBtn = create.btn('percentages-button', null, 'percentages');

const settingsBtn = create.btn('settings-button', null, 'settings');

const aboutBtn = create.btn('about-button', null, 'about');
aboutBtn.addEventListener('click', () => {
    change(scene.about);
});

create.appends(mainMenu, arithmeticBtn, multTablesBtn, unitConBtn, percentagesBtn, settingsBtn, aboutBtn);