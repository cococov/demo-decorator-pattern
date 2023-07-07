import BaseEnemy from './concreteComponents/baseEnemy.ts';
import BasePj from './concreteComponents/basePj.ts';
import {
  CottonShirtDecorator as EnemyCottonShirtDecorator,
  GuardDecorator as EnemyGuardDecorator,
  HoodDecorator as EnemyHoodDecorator,
  SandalsDecorator as EnemySandalsDecorator,
  SwordDecorator as EnemySwordDecorator
} from './concreteDecorators/enemy/index.ts';
import {
  CottonShirtDecorator as PjCottonShirtDecorator,
  GuardDecorator as PjGuardDecorator,
  HoodDecorator as PjHoodDecorator,
  SandalsDecorator as PjSandalsDecorator,
  SwordDecorator as PjSwordDecorator,
} from './concreteDecorators/pj/index.ts';

let enemy = new BaseEnemy(40);
let pj = new BasePj(60);

enemy = new EnemyCottonShirtDecorator(enemy);
enemy = new EnemyGuardDecorator(enemy);
enemy = new EnemyHoodDecorator(enemy);
enemy = new EnemySandalsDecorator(enemy);
enemy = new EnemySwordDecorator(enemy);

pj = new PjCottonShirtDecorator(pj);
pj = new PjGuardDecorator(pj);
pj = new PjHoodDecorator(pj);
pj = new PjSandalsDecorator(pj);
pj = new PjSwordDecorator(pj);

while (pj.getLife() > 0 && enemy.getLife() > 0) {
  const damageToEnemy = enemy.takeDamage(pj.doDamage());
  enemy.setLife(enemy.getLife() - damageToEnemy);
  if (damageToEnemy > 0) console.log(`\x1b[92mYou do ${damageToEnemy} damage to the enemy!\x1b[0m`);

  if (enemy.getLife() <= 0) break;

  const damageToPj = pj.takeDamage(enemy.doDamage());
  pj.setLife(pj.getLife() - damageToPj);
  if (damageToPj > 0) console.log(`\x1b[91mThe enemy does ${damageToPj} damage to you!\x1b[0m`);
}

if (pj.getLife() > 0) {
  console.log('You win!');
  console.log('Loot: ', enemy.dropLoot());
} else {
  console.log('YOU DIED');
}
