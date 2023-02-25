import { activeScene, change, scene } from "./scene_mgr.js";

export function init () {
    for (const [key, value] of Object.entries(scene)) {
        scene[key].hidden = true;
        document.body.appendChild(value);
    };

    change(activeScene);
};