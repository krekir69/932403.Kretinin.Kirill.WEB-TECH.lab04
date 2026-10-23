const navToggle = document.querySelector('.nav-toggle');
const navList = document.querySelector('.nav-list');

if (navToggle && navList) { 
    navToggle.addEventListener('click', () => {
        const expanded = navToggle.getAttribute('aria-expanded') === 'true';
        navToggle.setAttribute('aria-expanded', !expanded);
        navList.classList.toggle('active');
    });

    navList.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', () => {
            navList.classList.remove('active');
            navToggle.setAttribute('aria-expanded', 'false');
        });
    });
}
const Name = prompt("Привет! Как тебя зовут, кулинар??", "Гурман");
const calories = [];
const DISH_COUNT = 7;

for (let i = 1; i <= DISH_COUNT; i++) {
    let input = prompt(`Введите калорийность блюда №${i} (в ккал):`);
    let value = parseFloat(input);
    while (isNaN(value) || value < 0) {
        input = prompt(`Ошибка! Введите корректное число для блюда №${i}:`);
        value = parseFloat(input);
    }
    calories.push(value);
}

function findMaxCalories(arr) {
    let max = arr[0];
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] > max) {
            max = arr[i];
        }
    }
    return max;
}
function filterHighCalories(arr) {
    let highCalDishes = [];
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > 600) {
            highCalDishes.push(arr[i]);
        }
    }
    return highCalDishes;
}
function calculateTotalCalories(arr) {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i];
    }
    return sum;
}
const totalCalories = calculateTotalCalories(calories);
const highCalDishes = filterHighCalories(calories);
let highCalSum = 0;
for (let i = 0; i < highCalDishes.length; i++) {
    highCalSum += highCalDishes[i];
}
let lowCalCount = 0;
for (let i = 0; i < calories.length; i++) {
    if (calories[i] <= 300) {
        lowCalCount++;
    }
}
const lowCalProportion = (lowCalCount / calories.length) * 100;
alert(`Привет, ${Name}! Суммарная калорийность - ${totalCalories} ккал, из них ${highCalSum} ккал – в высококалорийных блюдах.`);

console.log(`Статистика ДЛЯ ${Name}`);
console.log(`Количество низкокалорийных блюд (<= 300 ккал): ${lowCalCount}`);
console.log(`Доля низкокалорийных блюд: ${lowCalProportion.toFixed(2)}%`);
console.log(`Самое калорийное блюдо: ${findMaxCalories(calories)} ккал`);

if (totalCalories > 3000) {
    console.log("Такой рацион лучше распределить на 2 дня");
} else {
    console.log("Рацион сбалансирован на один день.");
}