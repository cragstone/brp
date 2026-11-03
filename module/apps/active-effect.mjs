export class BRPActiveEffect extends ActiveEffect {
  get active() {
    if (this.parent instanceof Item && typeof this.parent.system?.equipStatus !== 'undefined') {
      //If item type isn't carried then effect is not active
      if (this.parent.system.equipStatus !== "carried") {
        return false;
      }
    }
  return super.active;
  }
}
