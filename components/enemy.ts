export interface Enemy {
  doDamage(): number;
  takeDamage(damage: number): number;
  dropLoot(): string[];
  getLife(): number;
  setLife(life: number): void;
}
