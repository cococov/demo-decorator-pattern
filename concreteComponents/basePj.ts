import { Pj } from '../components/pj.ts';

export default class BasePj implements Pj {
  private life?: number = 100;

  doDamage(): number { return 2 }
  takeDamage(damage: number): number { return damage }

  getLife(): number { return this.life || 0 }
  setLife(life: number): void { this.life = life }
}
