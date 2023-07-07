import PjDecorator from '../../baseDecorators/pjDecorator.ts';

export default class GuardDecorator extends PjDecorator {

  takeDamage(damage: number): number {
    if (this.pj.takeDamage(damage) <= 0) return 0;

    if (Math.random() > 0.4) {
      return this.pj.takeDamage(damage);
    } else {
      console.log('\x1b[36mYou blocked the attack!\x1b[0m');
      return 0;
    }
  }

  doDamage(): number {
    return this.pj.doDamage();
  }
}
