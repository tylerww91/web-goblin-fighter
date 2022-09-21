export function renderOpp(opp) {
    const li = document.createElement('li');
    li.classList.add('opp');

    const oppHp = document.createElement('span');
    oppHp.classList.add('hp');
    oppHp.textContent = opp.hp;

    const oppImg = document.createElement('img');
    oppImg.classList.add('opp-img');
    if (opp.hp < 1) {
        oppImg.src = '/assets/tombstone-opp.png';
    } else {
        oppImg.src = '/assets/' + opp.type + '-opp.png';
    }

    const oppName = document.createElement('span');
    oppName.classList.add('name');
    oppName.textContent = opp.name;

    li.append(oppHp, oppImg, oppName);

    return li;
}
