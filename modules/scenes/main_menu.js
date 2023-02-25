export let mainMenu = document.createElement('div');
mainMenu.setAttribute('id', 'main-menu');

let arithmetic = document.createElement('div');
arithmetic.setAttribute('id', 'arithmetic-button');
arithmetic.setAttribute('class', 'button');
arithmetic.textContent = 'arithmetic';

let multTables = document.createElement('div');
multTables.setAttribute('id', 'mult-tables-button');
multTables.setAttribute('class', 'button');
multTables.textContent = 'multiplication tables';

let unitCon = document.createElement('div');
unitCon.setAttribute('id', 'unit-con-button');
unitCon.setAttribute('class', 'button');
unitCon.textContent = 'unit conversion';

let percentages = document.createElement('div');
percentages.setAttribute('id', 'percentages-button');
percentages.setAttribute('class', 'button');
percentages.textContent = 'percentages';

let settings = document.createElement('div');
settings.setAttribute('id', 'settings-button');
settings.setAttribute('class', 'button');
settings.textContent = 'settings';

let about = document.createElement('div');
about.setAttribute('id', 'about-button');
about.setAttribute('class', 'button');
about.textContent = 'about';

const elements = [
    arithmetic,
    multTables,
    unitCon,
    percentages,
    settings,
    about
]


for (const element of elements) {
    mainMenu.appendChild(element);
};