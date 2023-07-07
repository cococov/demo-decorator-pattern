import EnemyDecorator from '../../baseDecorators/enemyDecorator.ts';

export default class GuardDecorator extends EnemyDecorator {

  takeDamage(damage: number): number {
    if (this.enemy.takeDamage(damage) <= 0) return 0;

    if (Math.random() > 0.4) {
      return this.enemy.takeDamage(damage);
    } else {
      console.log('\x1b[36mThe enemy blocked the attack!\x1b[0m');
      return 0;
    }
  }

  doDamage(): number {
    return this.enemy.doDamage();
  }

  dropLoot(): string[] {
    return Math.random() > 0.1
      ? this.enemy.dropLoot()
      : this.enemy.dropLoot().concat(['Guard']);
  }
}
