import { Pj } from '../components/pj.ts';

export default abstract class PjDecorator implements Pj {
  protected pj: Pj;

  constructor(pj: Pj) {
    this.pj = pj;
  }

  doDamage(): number {
    return this.pj.doDamage();
  }

  takeDamage(damage: number): number {
    return this.pj.takeDamage(damage);
  }

  getLife(): number {
    return this.pj.getLife();
  }

  setLife(life: number): void {
    this.pj.setLife(life);
  }
}
