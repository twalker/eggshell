export class Character {
  constructor(name) {
    this.name = name;
  }
  attack(character) {
    console.log(this.name, ' is attacking ', character);
  }
}
