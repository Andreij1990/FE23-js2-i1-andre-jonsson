import { Player } from "./overclass.js";

const mageHealth = document.getElementById('healthbar1');
const warriorHealth = document.getElementById('healthbar2');

const avoidBtn = document.getElementById('avoid');
const fireballBtn = document.getElementById('fireball');
const staffhitBtn = document.getElementById('staffhit');

const shieldBtn = document.getElementById('shield');
const swordslashBtn = document.getElementById('swordslash');
const shieldbashBtn = document.getElementById('shieldbash');

const namn = document.getElementById('playerName');
const fullname = document.getElementById('rubrik');
const knappen = document.getElementById('knappen');
const playerbar1 = document.getElementById('pb1');
const playerForm = document.getElementById('playerForm');
const playerForm2 = document.getElementById('playerForm2');

const namn2 = document.getElementById('playerName2');
const fullname2 = document.getElementById('rubrik2');
const knappen2 = document.getElementById('knappen2');
const playerbar2 = document.getElementById('pb2');

const texx = document.getElementById('texx');
const fireballSound = new Audio('./sounds/fireball-whoosh-1-179125.mp3');
const shieldBlock = new Audio('./sounds/shield-block-shortsword-143940.mp3');
const avoidHit = new Audio('./sounds/quick-swhooshing-noise-80898.mp3');
const swingSword = new Audio('./sounds/sword-sound-2-36274.mp3');
const shieldAttack = new Audio('./sounds/sword-slash-with-metallic-impact-185435.mp3');
const swingStaff = new Audio('./sounds/swing-whoosh-weapon-1-189819.mp3');

let knapp1Tryckt = false;
let knapp2Tryckt = false;

function addName() {
  fullname.innerText = namn.value;
  fullname.style.color = 'gold';
  playerbar1.appendChild(fullname);
  knapp1Tryckt = true;
  knappen.disabled = true;
  namn.disabled = true;
  document.body.style.backgroundImage = "url(./images/obscurus_by_jeromecomentale_dcu6wcx-414w-2x.jpg)";
  checkAndHideForm();
}

const playerInfo = document.getElementById('playerInfo');
const playerInfo2 = document.getElementById('playerInfo2');

function showField() {
  playerInfo.style.display = 'flex';
  document.body.style.backgroundImage = "url('./images/mtg_background_variant_1_by_jackthet_d9ns67g-414w-2x.jpg')";
  document.body.style.backgroundRepeat = 'no-repeat';
  document.body.style.backgroundSize = 'cover';
}

function hideField() {
  playerInfo.style.display = 'none';
}

knappen.addEventListener('mouseover', showField);
knappen.addEventListener('mouseover', hideField2);
playerInfo.addEventListener('mouseout', hideField);
knappen.addEventListener('click', addName);

function showField2() {
  playerInfo2.style.display = 'flex';
  document.body.style.backgroundImage = "url('./images/eastern_lands_by_theotherguy101_dexg7oh-414w-2x.jpg')";
  document.body.style.backgroundRepeat = 'no-repeat';
  document.body.style.backgroundSize = 'cover';
}

function hideField2() {
  playerInfo2.style.display = 'none';
}

function addName2() {
  fullname2.innerText = namn2.value;
  fullname2.style.color = 'gold';
  playerbar2.appendChild(fullname2);
  knapp2Tryckt = true;
  knappen2.disabled = true;
  namn2.disabled = true;
  document.body.style.backgroundImage = "url(./images/obscurus_by_jeromecomentale_dcu6wcx-414w-2x.jpg)";
  checkAndHideForm();
}

knappen2.addEventListener('mouseover', showField2);
knappen2.addEventListener('mouseover', hideField);
playerInfo2.addEventListener('mouseout', hideField2);
knappen2.addEventListener('click', addName2);

const container = document.getElementById('container');

function whoStarts() {
  const outFirst = Math.random();

  if (outFirst < 0.5) {
      warriorPlayer.notYou();
  } else {
      magePlayer.notYou();
  }
}

function checkAndHideForm() {
  if (knapp1Tryckt && knapp2Tryckt) {
    playerForm.style.display = 'none';
    playerForm2.style.display = 'none';
    container.style.display = 'flex';
    whoStarts();
    alert('Tangenter:\nMage: Avoid = "a", Fireball = "s", Staffhit = "d"\nWarrior: Shield = "4", Swordslash = "5", Shieldbash = "6"\nLjud på/av = "ctrl + m", Hjälp = "h"');
  }
}

//Mage
class Mage extends Player {
  constructor() {
    super('Mage', 100, ['fireball', 'staffhit'], 'avoid', 'woooh!');
  }

  notYou() {
    if (magePlayer.health > 0 && warriorPlayer.health > 0) {
    nextTurn(avoidBtn);
    nextTurn(fireballBtn);
    nextTurn(staffhitBtn);

    turn(shieldBtn);
    turn(swordslashBtn);
    turn(shieldbashBtn);
    } else {
      death();
    }
  }

  fireball() {
    const damage = Math.floor(Math.random() * 20);
    texx.innerText = `${this.name} kastar en fireball och gör ${damage} skada.`;
    warriorPlayer.takeDamage(damage);
    updateHealthWarrior();
    this.notYou();
    fireballSound.play();
  }

  staffHit() {
    const damage = Math.floor(Math.random() * 20);
    texx.innerText = `${this.name} slår med sin stav och gör ${damage} skada.`;
    warriorPlayer.takeDamage(damage);
    updateHealthWarrior();
    this.notYou();
    swingStaff.play();
  }

  avoid() {
    const damage = Math.floor(Math.random() * 10);
    texx.innerText = `${this.name} undgår slugt attacker och återställs ${damage} skada.`;
    magePlayer.healDamage(damage);
    updateHealthMage();
    this.notYou();
    avoidHit.play();
  }
}

//Warrior
class Warrior extends Player {
  constructor() {
    super("Warrior", 100, ['swordslash', 'shieldbash'], 'shield', 'yeah!');
  }

  notYou() {
    if (magePlayer.health > 0 && warriorPlayer.health > 0) {
    turn(avoidBtn);
    turn(fireballBtn);
    turn(staffhitBtn);

    nextTurn(shieldBtn);
    nextTurn(swordslashBtn);
    nextTurn(shieldbashBtn);
    } else {
      death();
    }
  }

  swordSlash() {
    const damage = Math.floor(Math.random() * 20);
    texx.innerText = `${this.name} gör ett svärdsnitt och gör ${damage} skada.`;
    magePlayer.takeDamage(damage);
    updateHealthMage();
    this.notYou();
    swingSword.play();
  }

  shieldBash() {
    const damage = Math.floor(Math.random() * 20);
    texx.innerText = `${this.name} slår med skölden och gör ${damage} skada.`;
    magePlayer.takeDamage(damage);
    updateHealthMage();
    this.notYou();
    shieldAttack.play();
  }

  shield() {
    const damage = Math.floor(Math.random() * 10);
    texx.innerText = `${this.name} håller upp sin sköld och återställs ${damage} skada.`;
    warriorPlayer.healDamage(damage);
    updateHealthWarrior();
    this.notYou();
    shieldBlock.play();
  }
}

const magePlayer = new Mage;
const warriorPlayer = new Warrior;

mageHealth.innerHTML = magePlayer.health;
warriorHealth.innerHTML = warriorPlayer.health;

const dyingSound = new Audio('./sounds/zombie-death-2-95167.mp3');

function updateHealthMage (){
  if (magePlayer.health > 0) {
  mageHealth.innerHTML = magePlayer.health;
  } else {
    mageHealth.innerHTML = 'dead';
  }
}

const reloadButton = document.createElement('button');
reloadButton.innerText = 'Ny match';
reloadButton.classList.add('reloadButton');

function delaySound (sound, effect){
  setTimeout(() => {
    sound.play();
  }, 1000);

  setTimeout(() => {
    effect.play();
  }, 2000);
}

const mageLine = new Audio('./sounds/game-character-140506.mp3');
const warriorLine = new Audio('./sounds/shouting-yeah-7043.mp3');
const mageCelebration = new Audio('./sounds/sound-effect-twinklesparkle-115095.mp3');
const warriorCelebration = new Audio('./sounds/medieval-fanfare-6826.mp3');

function death (){
  dyingSound.play();
  avoidBtn.disabled = true;
  fireballBtn.disabled = true;
  staffhitBtn.disabled = true;
  shieldBtn.disabled = true;
  swordslashBtn.disabled = true;
  shieldbashBtn.disabled = true;

  document.addEventListener('keydown', function(event) {
    if (event.key === 'Enter') {
        reloadButton.click();
    }
  });

  if (warriorPlayer.health <= 0){
    texx.innerText = `${namn.value} the Mage vann fighten!`;
    delaySound(mageLine, mageCelebration);
    texx.appendChild(reloadButton);
  } else {
    texx.innerText = `${namn2.value} the Warrior vann fighten!`;
    delaySound(warriorLine, warriorCelebration);
    texx.appendChild(reloadButton);
  }
}

function updateHealthWarrior (){
  if (warriorPlayer.health > 0) {
  warriorHealth.innerHTML = warriorPlayer.health;
  } else {
    warriorHealth.innerHTML = 'dead';
  }
}

function turn (button){
  button.disabled = false;
}

function nextTurn (button){
  button.disabled = true;
}

reloadButton.addEventListener('click', function() {
    location.reload();
});

export { magePlayer, warriorPlayer, namn, namn2 };
