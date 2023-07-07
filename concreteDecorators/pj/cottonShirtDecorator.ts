import PjDecorator from '../../baseDecorators/pjDecorator.ts';

export default class CottonShirtDecorator extends PjDecorator {

  takeDamage(damage: number): number {
    if (this.pj.takeDamage(damage) <= 2) return 0;
    return this.pj.takeDamage(damage) - 2;
  }

  doDamage(): number {
    return this.pj.doDamage();
  }
}
