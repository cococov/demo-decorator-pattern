import { Enemy } from '../components/enemy.ts';

export default abstract class EnemyDecorator implements Enemy {
  protected enemy: Enemy;

  constructor(enemy: Enemy) {
    this.enemy = enemy;
  }

  doDamage(): number {
    return this.enemy.doDamage();
  }

  takeDamage(damage: number): number {
    return this.enemy.takeDamage(damage);
  }

  dropLoot(): string[] {
    return this.enemy.dropLoot();
  }

  getLife(): number {
    return this.enemy.getLife();
  }

  setLife(life: number): void {
    this.enemy.setLife(life);
  }
}
