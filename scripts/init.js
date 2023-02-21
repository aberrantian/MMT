const allBox = document.getElementById('all');
if (allBox) {
    allBox.addEventListener('click', () => {
        if (allBox.checked) {
            for (const box of allBoxTargets) {
                box.checked = true;
            };    
            console.log(config);
        } else {
            for (const box of allBoxTargets) {
                box.checked = false;
            };
            console.log(config);
        };
    });
};

const addBox = document.getElementById('addition');
const subBox = document.getElementById('subtraction');
const multBox = document.getElementById('multiplication');
const divBox = document.getElementById('division');
const decimalBox = document.getElementById('decimals');
const recurBox = document.getElementById('recurring');
const negBox = document.getElementById('negatives');
const digits = document.getElementById('digits');
const numOperators = document.getElementById('num-operators');

const startButton = document.getElementById('start-button');
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
        config[opt.id] = opt.value;
        // console.log(`${opt.id} = ${opt.value}`);
    }

}

setupConfig();


function redirect () {
    window.location.href = './pages/play.html';
}


function start() {
    setupConfig();
    redirect();
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