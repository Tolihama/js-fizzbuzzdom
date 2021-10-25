/*
 * FizzBuzzDom
 */

// Selectors
const container = document.querySelector('.container');
const div = document.createElement('div');

// Script parameters
const size = 100;
const rowSize = 7;

// Dom elements generator

for (let i = 1; i <= size;) {
    container.innerHTML += '<div class="row">';
    const row = document.querySelector('.container .row:last-child');
    for (let iRow = 1; (iRow <= rowSize) && (i <= size); iRow++) {

        if ((i % 3 === 0) && (i % 5 === 0)) {
            row.innerHTML += '<div class="square fizzbuzz">fizzbuzz</div>';
        } else if (i % 3 === 0) {
            row.innerHTML += '<div class="square fizz">fizz</div>';
        } else if (i % 5 === 0) {
            row.innerHTML += '<div class="square buzz">buzz</div>';
        } else {
            row.innerHTML += `<div class="square">${i}</div>`;
        }
        i++;
        console.log(i);
    }
    container.innerHTML += '</div>';
}