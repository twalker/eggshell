export class Character {
  constructor(x, y, name) {
    this.x = x;
    this.y = y;
  }
  attack(character) {
    console.log('attacking', character);
  }
}
