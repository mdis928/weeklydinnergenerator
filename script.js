// let buttonRandom = document.querySelector('button');
// let result = document.querySelector('h4');

// let dinner = ['Spagetti and meatballs', "Chicken and a salad", "steak and fries", ];

// function getRandomDinner(min, max) {
//     let step1 = max - min + 1;
//     let step2 = Math.random() * step1;
//     let result = Math.floor(step2) + min;

//     return result;
// }

// buttonRandom.addEventListener('click', () => {
//     let index = getRandomDinner(0, dinner.length-1);
//     result.innerText = dinner[index];

// console.log(buttonRandom)
// });

const buttonMonday = document.getElementById('button1');
const resultMonday = document.getElementById('result1');

const buttonTuesday = document.getElementById('button2');
const resultTuesday = document.getElementById('result2');

const buttonWednesday = document.getElementById('button3');
const resultWednesday = document.getElementById('result3');

const buttonThursday = document.getElementById('button4');
const resultThursday = document.getElementById('result4');

const buttonFriday = document.getElementById('button5');
const resultFriday = document.getElementById('result5');

const buttonSaturday = document.getElementById('button6');
const resultSaturday = document.getElementById('result6');

const buttonSunday = document.getElementById('button7');
const resultSunday = document.getElementById('result7');


let dinner = ['Spagetti and meatballs', "Chicken and a salad", "steak and fries",];



// MONDAY
function getRandomDinnerMonday(min, max) {
    let step1 = max - min + 1;
    let step2 = Math.random() * step1;
    let result = Math.floor(step2) + min;

    return result;
}

buttonMonday.addEventListener('click', () => {
    let index = getRandomDinnerMonday(0, dinner.length-1);
    resultMonday.innerText = dinner[index];

console.log(buttonMonday)
});


// Tuesday
function getRandomDinnerTuesday(min, max) {
    let step1 = max - min + 1;
    let step2 = Math.random() * step1;
    let result = Math.floor(step2) + min;

    return result;
}

buttonTuesday.addEventListener('click', () => {
    let index = getRandomDinnerTuesday(0, dinner.length-1);
    resultTuesday.innerText = dinner[index];

console.log(buttonTuesday)
});

// Wednesday
function getRandomDinnerWednesday(min, max) {
    let step1 = max - min + 1;
    let step2 = Math.random() * step1;
    let result = Math.floor(step2) + min;

    return result;
}

buttonWednesday.addEventListener('click', () => {
    let index = getRandomDinnerWednesday(0, dinner.length-1);
    resultWednesday.innerText = dinner[index];

console.log(buttonWednesday)
});

// Thursday
function getRandomDinnerThursday(min, max) {
    let step1 = max - min + 1;
    let step2 = Math.random() * step1;
    let result = Math.floor(step2) + min;

    return result;
}

buttonThursday.addEventListener('click', () => {
    let index = getRandomDinnerThursday(0, dinner.length-1);
    resultThursday.innerText = dinner[index];

console.log(buttonThursday)
});

// Friday
function getRandomDinnerFriday(min, max) {
    let step1 = max - min + 1;
    let step2 = Math.random() * step1;
    let result = Math.floor(step2) + min;

    return result;
}

buttonFriday.addEventListener('click', () => {
    let index = getRandomDinnerFriday(0, dinner.length-1);
    resultFriday.innerText = dinner[index];

console.log(buttonFriday)
});

// Saturday
function getRandomDinnerSaturday(min, max) {
    let step1 = max - min + 1;
    let step2 = Math.random() * step1;
    let result = Math.floor(step2) + min;

    return result;
}

buttonSaturday.addEventListener('click', () => {
    let index = getRandomDinnerSaturday(0, dinner.length-1);
    resultSaturday.innerText = dinner[index];

console.log(buttonSaturday)
});

// Sunday
function getRandomDinnerSunday(min, max) {
    let step1 = max - min + 1;
    let step2 = Math.random() * step1;
    let result = Math.floor(step2) + min;

    return result;
}

buttonSunday.addEventListener('click', () => {
    let index = getRandomDinnerSunday(0, dinner.length-1);
    resultSunday.innerText = dinner[index];

console.log(buttonSunday)
});