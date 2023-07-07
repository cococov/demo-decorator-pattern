export interface Pj {
  doDamage(): number;
  takeDamage(damage: number): number;
  getLife(): number;
  setLife(life: number): void;
}
