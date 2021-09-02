let buttonRandom = document.querySelector('button');
let result = document.querySelector('h4');

let dinner = ['Mike', "john", "Jane", "kate,", "rach"];

function getRandomDinner(min, max) {
    let step1 = max - min + 1;
    let step2 = Math.random() * step1;
    let result = Math.floor(step2) + min;

    return result;
}

buttonRandom.addEventListener('click', () => {
    let index = getRandomDinner(0, dinner.length-1);
    result.innerText = dinner[index];

console.log(buttonRandom)
});