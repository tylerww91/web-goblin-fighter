/* Imports */

/* Get DOM Elements */

const stat = document.getElementById('stat');
const userImg = document.getElementById('user-img');
const userHp = document.getElementById('user-hp');

/* State */
let user = {
    hp: '30',
    type: 'mario',
};

let opp = '';

/* Events */

/* Display Functions */

function userDisplay() {
    userHp.textContent = user.hp;
    if (user.hp <= 0) {
        userImg.src = 'assets/' + 'paper-mario-dead.png';
    } else {
        userImg.src = 'assets/' + 'paper-mario.png';
    }
}

function displayOpp() {}

// (don't forget to call any display functions you want to run on page load!)
userDisplay();
