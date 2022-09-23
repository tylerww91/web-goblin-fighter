export function getRandomNumber(choices) {
    return Math.floor(Math.random() * choices);
}

export function getRandomItem(oppTypes) {
    const random = getRandomNumber(oppTypes.length);
    const item = oppTypes[random];
    return item;
}
