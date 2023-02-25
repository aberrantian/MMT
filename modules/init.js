import { mainMenu } from "./scenes/main_menu.js";

export function init () {
    while (document.body.lastChild) {
        document.body.removeChild(document.body.lastChild);
    };

    document.body.appendChild(mainMenu);
};