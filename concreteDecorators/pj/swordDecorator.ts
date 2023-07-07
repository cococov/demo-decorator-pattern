import PjDecorator from '../../baseDecorators/pjDecorator.ts';

export default class SwordDecorator extends PjDecorator {

  takeDamage(damage: number): number {
    return this.pj.takeDamage(damage);
  }

  doDamage(): number {
    return this.pj.doDamage() + 12;
  }
}
