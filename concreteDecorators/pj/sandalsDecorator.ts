import PjDecorator from '../../baseDecorators/pjDecorator.ts';

export default class SandalsDecorator extends PjDecorator {

  takeDamage(damage: number): number {
    if (this.pj.takeDamage(damage) <= 1) return 0;
    return this.pj.takeDamage(damage) - 1;
  }

  doDamage(): number {
    return this.pj.doDamage();
  }
}
