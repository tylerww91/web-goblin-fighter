/* Imports */
import { renderOpp } from './render-opp.js';
// import { getRandomItem } from './utils.js';
/* Get DOM Elements */

// const stat = document.getElementById('stat');
const userImg = document.getElementById('user-img');
const userHp = document.getElementById('user-hp');
// const battleLog = document.getElementById('battle-log');
const messageDisplay = document.getElementById('message-display');

const oppSection = document.getElementById('opp-list');

/* State */
// let result = '';

// let defeated = '',

let user = {
    hp: '30',
    name: 'mario',
    status: 'alive',
};

let opps = [
    { name: 'Buster', type: 'rex', hp: 10 },
    { name: 'Bellamy', type: 'lakitu', hp: 8 },
    { name: 'Julia', type: 'goombella', hp: 3 },
    { name: 'Kratos', type: 'whomp', hp: 13 },
];

// const rex = {
//     type: 'rex',
//     hp: 10,
// };

// const lakitu = {
//     type: 'lakitu',
//     hp: 8,
// };

// const goombella = {
//     type: 'goombella',
//     hp: 3,
// };

// const whomp = {
//     type: 'whomp',
//     hp: 13,
// };

// const bowser = {
//     type: 'bowser',
//     hp: 40,
// };

// const oppTypes = [
//     goombella,
//     goombella,
//     goombella,
//     goombella,
//     lakitu,
//     lakitu,
//     lakitu,
//     lakitu,
//     lakitu,
//     lakitu,
//     rex,
//     rex,
//     rex,
//     rex,
//     rex,
//     whomp,
//     whomp,
//     whomp,
//     bowser,
// ];

// const userAttacks = [0, 1, 1, 2, 2, 2, 3, 3, 3, 3, 3, 4, 4, 4, 5, 5, 8];
// const oppAttacks = [0, 0, 1, 1, 1, 1, 2, 2, 2, 3, 3];

// let message = '';

// let gameState = '';

// let opp = '';

/* Events */

/* Display Functions */

function userDisplay() {
    userHp.textContent = user.hp;
    if (user.hp < 1) {
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

        // oppEl.addEventListener('click', () => {
        //     if (opp.hp < 1)
        //     result = 'no use hitting a tombstone, that is just disrespectful';

        // })
    }
}

function displayMessage() {
    messageDisplay.textContent = `Earn stars by defeating opponents! Click on an opponent to start fighting!`;
}

// (don't forget to call any display functions you want to run on page load!)
userDisplay();
displayMessage();
displayOpp();
