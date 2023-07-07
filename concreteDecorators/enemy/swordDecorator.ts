import EnemyDecorator from '../../baseDecorators/enemyDecorator.ts';

export default class RustySwordDecorator extends EnemyDecorator {

  takeDamage(damage: number): number {
    return this.enemy.takeDamage(damage);
  }

  doDamage(): number {
    return this.enemy.doDamage() + 8;
  }

  dropLoot(): string[] {
    return Math.random() > 0.3
      ? this.enemy.dropLoot()
      : this.enemy.dropLoot().concat(['Rusty Sword']);
  }
}
