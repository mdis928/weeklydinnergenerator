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
              "Tuscan Beef-Stuffed Peppers", "Meatloaf A La Mom", "Farmers Market Linguine", "Chicken Sausage Gnocchi Bake", "Hearty Black Bean & Poblano Soup", "Zucchini & Pesto Focaccia Pizza", "Butternut Squash & caramelized Onion Flatbeards", "Gnocchi with Spinach & Heirloom Tomatoes", "Butternut Squash Agnolotti", "Chickpea-powered mediterranean couscous",
              "Mediterranean Baked Veggies", "Salsa Verde Enchiladas", "Roasted Vegetable Paella", "Veggie Bibimbap Rice Bowls", "Roasted Veggie Caprese Bowls", "Mediterranean Mushroom Stuffed Peppers", "Balsamic Tomato Parmesan Risotto", "Gorgeous Greens Farro Bowls", "Veggie Tagine Couscous Bowls", "Cheesy Vegetable Quiche", "Bruschetta Zucchini Boats", "Rajas Quesadillas",
              "Kale, Cranberrry & Walnut Stuffed Delicata Squash", "Mexicali Black Bean Soup", "Roasted Garlic & Zucchini Flatbeards", "Garden Spinach Ricotta Ravioli", "BBQ Pineapple Flatbeards", "Crispy Italian Chicken", "Chicken Scallopini", "Easy Chicken Fajitas", "Garlic Rosemary Chicken", "Orchard Chicken Salad", "All Kale Chicken Caesar", "Tuscan Garlic Butter Chicken", 
              "Pecan-Crusted Chicken", "Chicken Gyro Couscous Bowls", "Jammy Red Peppers Chicken", "Chicken in a Dijon Sauce", "Brown Sugar Bourbon Chicken", "Tuscan Chicken over Bulgur Pilaf", "Balsamic Fig Chicken", "Szechuan Chicken & Pineapple Stir-Fry", "Creamy Chive Chicken", "Creamy Dill Chicken", "Paprika Chicken in a Lemony Sauce", "Hoisin Honey Chicken", "Chicken Cutlets a L'orange",
              "Tex-Mex Turkey Bowls", "Jalapeno Chimi Chicken", "Chicken Tortilla Soup", "Chicken in a Dijon Sauce", "Chicken Shawarma Bowls", "Shawarma-Spiced Chicken", "Cripsy Southwestern Chicken Cutlets", "Chicken Bulgogi Bowls", "Oven-Baked Parmesan Chicken", "Chicken & Cranberry Currant Pan Sauce", "Chicken Enchiladas Verdes", "Hot Honey Chicken", "Cheesy Smothered Mushroom Chicken", 
              "Lauren Conrad's Chicken Tacos", "Vietnamese Chicken Bowls", "Amazing Aproicot Chicken", "Mexican Chicken & Rice Bowls", "Paprika Chicken with a Jammy Pan Sauce", "Cherry Ancho Chicken", "Chipotle Chicken & Rice Bowls", "Jammin' Cherry Thyme Chicken", "Crispy Parmesan Chicken", "Chicken Cutlets Topped with Lemon Cream Sauce", "Chicken & Guac Burrito Bowls", "Za'atar Chicken 7 Farro", 
              "Chicken & Polano Fajitas", "Southwest Shrimp Tacos", "Thai Shrimp with Candied peanuts", "Blackend Shrimp & Kale Salad", "Shrimp & Black Bean Burrito Bowl", "Seared Tilapia & Ponzu Mayo", "Barramundi with Creamy Salsa Verde", "Sizzling Hoisin Shrimp", "Cajun-Styled Blackened Tilapia", "Smoky Barramundi with a Brown Butter Drizzle", "Hoisin Sesame Roasted Veggies Bowls", "Spicy Shrimp & Broccoli Stir-Fry",
              "Blackend Tilapia Tacos", "Spiced Dijon Salmon", "Barramundi & Scallion Sriracha Pesto", "Shrimp & Zucchini Ribbons", "Lemon Butter Barramundi", "Blackend Barramundi & Pineapple Salsa", "Tilapia with Scallion Sriracha Pesto", "Baja Rockfish", "Southern-Spiced Tilapia & Tartar Sauce", "Thai Shrimp & Peanut Noodles", "Southwestern Shrimp"];



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