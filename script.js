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


let dinner = ["Creamy Cilantro Steak Bowls", "Pork Chops with Creamy Lemon Pan Sauce", "Cranberry Dijon Pork Chops", "Creamy Dill Pork Cutlets", "Pinappley Pork Meatloaves", "Honey Thyme Pork Tenderloin", "Chipotle BBQ Pork Tenderloin", "Bulgogi Pork Cutlets over Veggie Stir-Fry", "Pimenton Pork Tenderloin", "Soy-Glazed Meatballs",
              "Pork Chorizo & Corn Quesadillas", "Pinnapple Salsa Pork Chops", "Jammin Fig Pork Chops", "Balsamic-Glaed Pork Chops", "Honey-Glazed Pork Chops", "Pork Chops & Jalapeno Gravy", "Steakhouse Pork Chops", "Italian Wedding Soup", "Korean Beef Bibimbap", "Figgy Balsamic Pork", "Southwest-Spiced Steak", "Butter-Up Steak", 
              "Mexican Pork & Street Corn Tacos", "Roasted Pork Tenderloin", "Carne Asada Steak Bowls", "Honey-Butter BBQ Pork Cutlets", "Teriyaki Pork Chops", "Miso-Butter Steaks & Rice", "Japanese Beef & Rice Bowls", "Pork Chops & Almond Salsa Verde", "Spiced Beef & Salsa Verde Couscous", "Shawarma-Spiced Meatball Pitas", "Sweet Soy Pork Tenderloins",
              "Tuscan Beef-Stuffed Peppers", "Meatloaf A La Mom"];



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