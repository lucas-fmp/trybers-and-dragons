import Fighter, { SimpleFighter } from '../Fighter';
import Battle from './Battle';

export default class PVE extends Battle {
  constructor(
    private _player: Fighter, 
    private _monsters: (Fighter | SimpleFighter)[],
  ) {
    super(_player);
  }

  fight(): number {
    while (this._monsters.length > 0 && this._player.lifePoints > 0) {
      this._player.attack(this._monsters[0]);
      if (this._monsters[0].lifePoints < 0) {
        this._monsters.shift();
      }
      this._monsters.forEach((monster) => monster.attack(this._player));
    }
    return super.fight();
  }
}