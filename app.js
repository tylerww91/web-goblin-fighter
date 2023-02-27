/* Imports */
import { renderOpp } from './render-opp.js';
import { getRandomItem } from './utils.js';
/* Get DOM Elements */
const playAgain = document.getElementById('play-again-button');
const removeOpp = document.getElementById('remove-opp-button');
const userImg = document.getElementById('user-img');
const userHp = document.getElementById('user-hp');
const battleLog = document.getElementById('battle-log');
const messageDisplay = document.getElementById('message-display');
const oppSection = document.getElementById('opp-list');
const userKills = document.getElementById('user-kills');
const addOppForm = document.getElementById('add-opp-form');
const deathSound = new Audio('/assets/mario-dies-sound.mp3');
const oppDeathSound = new Audio('/assets/opp-death-sound.mp3');

/* State */
let result = '';

let defeated = 0;

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

const rex = {
    type: 'rex',
    hp: 10,
};

const lakitu = {
    type: 'lakitu',
    hp: 8,
};

const goombella = {
    type: 'goombella',
    hp: 3,
};

const whomp = {
    type: 'whomp',
    hp: 13,
};

const bowser = {
    type: 'bowser',
    hp: 40,
};

const oppTypes = [
    goombella,
    goombella,
    goombella,
    goombella,
    lakitu,
    lakitu,
    lakitu,
    lakitu,
    lakitu,
    lakitu,
    rex,
    rex,
    rex,
    rex,
    rex,
    whomp,
    whomp,
    whomp,
    bowser,
];

const userAttacks = [0, 1, 1, 2, 2, 2, 3, 3, 3, 3, 3, 4, 4, 4, 5, 5, 8];
const oppAttacks = [0, 0, 1, 1, 1, 1, 2, 2, 2, 3, 3];


/* Events */

deathSound.volume = 0.5;
oppDeathSound.volume = 0.5;

addOppForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const formData = new FormData(addOppForm);
    const oppType = getRandomItem(oppTypes);

    const opp = {
        name: formData.get('name'),
        type: oppType.type,
        hp: oppType.hp,
    };

    opps.push(opp);

    result = `${opp.name} the ${opp.type} joined the fight!`;

    displayOpp();
    displayBattleLog();
    addOppForm.reset();
});

removeOpp.addEventListener('click', () => {
    const stillAlive = [];
    for (const opp of opps) {
        if (opp.hp > 0) {
            stillAlive.push(opp);
        }
    }
    opps = stillAlive;
    displayOpp();
});

playAgain.addEventListener('click', () => {
    location.reload();
});

/* Display Functions */

function displayBattleLog() {
    battleLog.textContent = result;
}

function displayMessage() {
    messageDisplay.textContent = `Earn stars by defeating opponents! Click on an opponent to start fighting!`;
}

function userDisplay() {
    userHp.textContent = user.hp;
    if (user.hp < 1) {
        user.status = 'dead';
        userImg.src = 'assets/' + 'paper-mario-dead.png';
        deathSound.play();
        playAgain.classList.remove('hidden');
        oppSection.classList.add('hidden');
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

        oppEl.addEventListener('click', () => {
            if (opp.hp < 1) {
                result = 'no use hitting a tombstone, that is just disrespectful';
                displayBattleLog();
                return;
            }

            if (user.hp < 1) {
                result = `You died! click 'Play again' to continue`;
                displayBattleLog();
                return;
            }

            const userAttack = getRandomItem(userAttacks);
            const oppAttack = getRandomItem(oppAttacks);

            user.hp = Math.max(0, user.hp - oppAttack);
            opp.hp = Math.max(0, opp.hp - userAttack);

            result = '';
            if (userAttack === 0) {
                result += 'Thatsaaa MISS.  ';
            } else {
                result += `You hit ${opp.name} and dealt ${userAttack} damage!  `;
            }

            if (oppAttack === 0) {
                result += `${opp.name} missed ya!`;
            } else {
                result += `OUCH! ${opp.name} dealt you ${oppAttack} damage!`;
            }

            if (opp.hp < 1) {
                defeated++;
                displayBattleLog();
                userKills.textContent = defeated;
                messageDisplay.textContent = `You defeated ${defeated} opponent(s)`;
                oppDeathSound.play();
            }

            displayBattleLog();
            userDisplay();
            displayOpp();
        });
    }
}

// (don't forget to call any display functions you want to run on page load!)
userDisplay();
displayMessage();
displayOpp();
