export class Character {
  constructor(name) {
    this.name = name;
  }
  attack(character) {
    console.log(this.name, ' attacking  and stuff ', character);
  }
}
