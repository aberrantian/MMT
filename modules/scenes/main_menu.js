import { change, scene } from "../scene_mgr.js";

export const mainMenu = document.createElement('div');
mainMenu.setAttribute('id', 'main-menu');

const arithmeticBtn = document.createElement('div');
arithmeticBtn.setAttribute('id', 'arithmetic-button');
arithmeticBtn.setAttribute('class', 'button');
arithmeticBtn.textContent = 'arithmetic';

const multTablesBtn = document.createElement('div');
multTablesBtn.setAttribute('id', 'mult-tables-button');
multTablesBtn.setAttribute('class', 'button');
multTablesBtn.textContent = 'multiplication tables';

const unitConBtn = document.createElement('div');
unitConBtn.setAttribute('id', 'unit-con-button');
unitConBtn.setAttribute('class', 'button');
unitConBtn.textContent = 'unit conversion';

const percentagesBtn = document.createElement('div');
percentagesBtn.setAttribute('id', 'percentages-button');
percentagesBtn.setAttribute('class', 'button');
percentagesBtn.textContent = 'percentages';

const settingsBtn = document.createElement('div');
settingsBtn.setAttribute('id', 'settings-button');
settingsBtn.setAttribute('class', 'button');
settingsBtn.textContent = 'settings';

const aboutBtn = document.createElement('div');
aboutBtn.setAttribute('id', 'about-button');
aboutBtn.setAttribute('class', 'button');
aboutBtn.textContent = 'about';

aboutBtn.addEventListener('click', () => {
    change(scene.about);
});

const elements = [
    arithmeticBtn,
    multTablesBtn,
    unitConBtn,
    percentagesBtn,
    settingsBtn,
    aboutBtn
]


for (const element of elements) {
    mainMenu.appendChild(element);
};