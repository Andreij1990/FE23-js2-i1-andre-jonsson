const healingSound = new Audio('./sounds/short-choir-6116.mp3');
const damageSound = new Audio('./sounds/ough-47202.mp3');

export class Player {
  constructor(name, health, attack, defense, line) {
    this.name = name;
    this.health = health;
    this.attack = attack;
    this.defense = defense;
    this.line = line;
  }

  takeDamage(damage) {
    if (this.health > 0) {
      this.health -= damage;
      console.log(`${this.name} tar ${damage} skada. Nuvarande hälsa: ${this.health}`);
      if (damage > 0){
      damageSound.play();
    }
    } else {
      console.log(`${this.name} died`);
    }
  }
  healDamage(damage) {
    this.health += damage;
    console.log(`${this.name} heller ${damage} hälsa. Nuvarande hälsa: ${this.health}`);
    healingSound.play();
  }
}