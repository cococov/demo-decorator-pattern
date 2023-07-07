import EnemyDecorator from '../../baseDecorators/enemyDecorator.ts';

export default class HoodDecorator extends EnemyDecorator {

  takeDamage(damage: number): number {
    return Math.max(this.enemy.takeDamage(damage) - 1, 0);
  }

  doDamage(): number {
    return this.enemy.doDamage();
  }

  dropLoot(): string[] {
    return Math.random() > 0.4
      ? this.enemy.dropLoot()
      : this.enemy.dropLoot().concat(['Hood']);
  }
}
