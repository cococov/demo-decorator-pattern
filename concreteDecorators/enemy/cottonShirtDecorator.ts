import EnemyDecorator from '../../baseDecorators/enemyDecorator.ts';

export default class CottonShirtDecorator extends EnemyDecorator {

  takeDamage(damage: number): number {
    if (this.enemy.takeDamage(damage) <= 2) return 0;
    return this.enemy.takeDamage(damage) - 2;
  }

  doDamage(): number {
    return this.enemy.doDamage();
  }

  dropLoot(): string[] {
    return Math.random() > 0.3
      ? this.enemy.dropLoot()
      : this.enemy.dropLoot().concat(['Cotton Shirt']);
  }
}
