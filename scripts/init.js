import {
    allBox,
    addBox,
    subBox,
    multBox,
    divBox,
    decimalBox,
    recurBox,
    negBox,
    digits,
    numOperators,
    startButton
} from './elements.js';


if (allBox) {
    allBox.addEventListener('click', () => {
        if (allBox.checked) {
            for (const box of allBoxTargets) {
                box.checked = true;
            };
            setupConfig();

        } else {
            for (const box of allBoxTargets) {
                box.checked = false;
            };
            setupConfig();
        };
    });
};

if (startButton) {
    startButton.addEventListener('click', start)
}

const allBoxTargets = [
    addBox,
    subBox,
    multBox,
    divBox,
]

const options = [
    addBox,
    subBox,
    multBox,
    divBox,
    decimalBox,
    recurBox,
    negBox,
    digits,
    numOperators,
]

for (const opt of options) {
    opt.addEventListener('click', () => {
        setupConfig();
        console.log(config);
    })
};

let config = {};


function setupConfig() {
    for (const opt of options) {
        if (opt.type == 'checkbox') {
            config[opt.id] = opt.checked;
        } else if (opt.type == 'number') {
            config[opt.id] = opt.value;
        };
    };

    console.log(config);
};

setupConfig();


function redirect (destination) {
    window.location.href = destination;
}


function start() {
    setupConfig();
    redirect('/pages/play.html');
    // console.log(config);
}


/*
let question = document.getElementById('example-question');

question.innerHTML = 'test';

let timeElapsed = 0;

const intervalID = setInterval(() => {
    question.innerHTML = timeElapsed;
    timeElapsed++;

    if (timeElapsed > 10) {
        clearInterval(intervalID);
    }
}, 1000)
//*/

export { config };