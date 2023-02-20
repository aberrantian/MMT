/*
This script will collect mode options into a json file
for use in interactive mode.
*/

// input type checkbox
const allBox = document.getElementById('all');
const addBox = document.getElementById('addition');
const subBox = document.getElementById('subtraction');
const multBox = document.getElementById('multiplication');
const divBox = document.getElementById('division');

const decimalBox = document.getElementById('decimals');
const recurBox = document.getElementById('recurring');
const negBox = document.getElementById('negatives');

// input type number
const digits = document.getElementById('digits');


const allBoxTargets = [
    addBox,
    subBox,
    multBox,
    divBox
]

allBox.addEventListener('click', () => {
    if (allBox.checked) {
        for (const box of allBoxTargets) {
            box.checked = true;
        }


    } else {
        for (const box of allBoxTargets) {
            box.checked = false;
        }

    }
});


const startButton = document.getElementById('start-button');

startButton.addEventListener('click', () => {
    alert('click');
})

//*
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

