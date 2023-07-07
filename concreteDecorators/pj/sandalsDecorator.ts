import PjDecorator from '../../baseDecorators/pjDecorator.ts';

export default class SandalsDecorator extends PjDecorator {

  takeDamage(damage: number): number {
    return Math.max(this.pj.takeDamage(damage) - 1, 0);
  }

  doDamage(): number {
    return this.pj.doDamage();
  }
}
