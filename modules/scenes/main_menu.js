import { change, scene } from "../scene_mgr.js";
import { create } from "../create.js";

export const mainMenu = create.div('main-menu');

const arithmeticBtn = create.btn('arithmetic-button', null, 'arithmetic');
arithmeticBtn.addEventListener('click', () => {
    change(scene.arithmetic);
});

const multTablesBtn = create.btn('mult-tables-button', null, 'multiplication tables');
multTablesBtn.addEventListener('click', () => {
    change(scene.multTables);
});

const unitConBtn = create.btn('unit-con-button', null, 'unit conversion');
unitConBtn.addEventListener('click', () => {
    change(scene.unitCon);
});

const percentagesBtn = create.btn('percentages-button', null, 'percentages');
percentagesBtn.addEventListener('click', () => {
    change(scene.percentages);
});

const settingsBtn = create.btn('settings-button', null, 'settings');
settingsBtn.addEventListener('click', () => {
    change(scene.settings);
});

const aboutBtn = create.btn('about-button', null, 'about');
aboutBtn.addEventListener('click', () => {
    change(scene.about);
});

const buttonContainer = create.div(null, 'container');
create.appends(buttonContainer, arithmeticBtn, multTablesBtn, unitConBtn, percentagesBtn, settingsBtn, aboutBtn);

create.appends(mainMenu, buttonContainer);