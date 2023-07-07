import EnemyDecorator from '../../baseDecorators/enemyDecorator.ts';

export default class GuardDecorator extends EnemyDecorator {

  takeDamage(damage: number): number {
    if (this.enemy.takeDamage(damage) <= 0) return 0;

    return Math.random() > 0.4
      ? this.enemy.takeDamage(damage)
      : 0;
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
