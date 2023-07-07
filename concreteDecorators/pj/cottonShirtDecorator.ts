import PjDecorator from '../../baseDecorators/pjDecorator.ts';

export default class CottonShirtDecorator extends PjDecorator {

  takeDamage(damage: number): number {
    return Math.max(this.pj.takeDamage(damage) - 2, 0);
  }

  doDamage(): number {
    return this.pj.doDamage();
  }
}
