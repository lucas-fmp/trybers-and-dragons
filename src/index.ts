import Battle, { PVE, PVP } from './Battle';
import Character from './Character';
import Dragon from './Dragon';
import Monster from './Monster';

// Characters

const player1 = new Character('Lucas');
const player2 = new Character('Alice');
const player3 = new Character('Pipoca');

player1.levelUp();
player1.levelUp();
player1.levelUp();

// Monsters

const monster1 = new Monster();
const monster2 = new Dragon();

// PVP 

const pvp = new PVP(player2, player3);

// PVE

const pve = new PVE(player1, [monster1, monster2]);

// Battles

const runBattles = (battles: Battle[]) => {
  battles.forEach((battle) => battle.fight());
};

export {
  player1,
  player2,
  player3,
  monster1,
  monster2,
  pvp,
  pve,
  runBattles,
};