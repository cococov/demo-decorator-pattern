import { Enemy } from '../components/enemy.ts';

export default class BaseEnemy implements Enemy {
  private life?: number = 40;

  doDamage(): number { return 1 }
  takeDamage(damage: number): number { return damage }
  dropLoot(): string[] { return [] }

  getLife(): number { return this.life || 0 }
  setLife(life: number): void { this.life = life }
}
