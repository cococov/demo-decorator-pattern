import PjDecorator from '../../baseDecorators/pjDecorator.ts';

export default class GuardDecorator extends PjDecorator {

  takeDamage(damage: number): number {
    if (this.pj.takeDamage(damage) <= 0) return 0;

    return Math.random() > 0.4
      ? this.pj.takeDamage(damage)
      : 0;
  }

  doDamage(): number {
    return this.pj.doDamage();
  }
}
