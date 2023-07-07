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

let enemy = new BaseEnemy();
let pj = new BasePj();

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

while(pj.getLife() > 0 && enemy.getLife() > 0) {
  enemy.setLife(enemy.takeDamage(pj.doDamage()));
  if (enemy.getLife() <= 0) break;
  pj.setLife(pj.takeDamage(enemy.doDamage()));
}

if (pj.getLife() > 0) {
  console.log('You win!');
  console.log('Loot: ', enemy.dropLoot());
} else {
  console.log('YOU DIED');
}
