/* Imports */
import { renderOpp } from './render-opp.js';
/* Get DOM Elements */

const stat = document.getElementById('stat');
const userImg = document.getElementById('user-img');
const userHp = document.getElementById('user-hp');
const battleLog = document.getElementById('battle-log');

const oppSection = document.getElementById('opp-list');

/* State */
let user = {
    hp: '30',
    name: 'mario',
    status: 'alive',
};

let opps = [
    { name: 'Goombella', hp: 5 },
    { name: 'Rex', hp: 15 },
    { name: 'Cloudguy', hp: 10 },
    { name: 'block', hp: 20 },
];

let message = '';

// let gameState = '';

// let opp = '';

/* Events */

/* Display Functions */

function userDisplay() {
    userHp.textContent = user.hp;
    if (user.hp <= 0) {
        user.status = 'dead';
        userImg.src = 'assets/' + 'paper-mario-dead.png';
    } else {
        userImg.src = 'assets/' + 'paper-mario.png';
        user.status = 'alive';
    }
}

function displayOpp() {
    oppSection.innerHTML = '';

    for (const opp of opps) {
        const oppEl = renderOpp(opp);
        oppSection.append(oppEl);
    }
}

function displayMessage() {
    battleLog.textContent = `Earn stars by defeating opponents!`;
}

// (don't forget to call any display functions you want to run on page load!)
userDisplay();
displayMessage();
displayOpp();
