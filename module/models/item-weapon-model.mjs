import { BRPSelectLists } from '../apps/select-lists.mjs';
import BRPItemModel from './item-model.mjs'

export default class BRPItemWeaponModel extends BRPItemModel {
  static defineSchema() {
    const fields = foundry.data.fields
    return {
      ...BRPItemModel.defineSchemaBase(),
      weaponType: new fields.StringField({ choices: BRPSelectLists.getWpnCategoryOptions() }),
      skill1: new fields.StringField({ initial: 'none' }),
      skill2: new fields.StringField({ initial: 'none' }),
      dmg1: new fields.StringField({ initial: '0' }),
      dmg2: new fields.StringField({ initial: '' }),
      dmg3: new fields.StringField({ initial: '' }),
      special: new fields.StringField({ choices: BRPSelectLists.getSpecialOptions() }),
      burst: new fields.BooleanField({ initial: false }),
      stun: new fields.BooleanField({ initial: false }),
      entangle: new fields.BooleanField({ initial: false }),
      explosive: new fields.BooleanField({ initial: false }),
      fire: new fields.BooleanField({ initial: false }),
      pierce: new fields.BooleanField({ initial: false }),
      sonic: new fields.BooleanField({ initial: false }),
      choke: new fields.BooleanField({ initial: false }),
      cold: new fields.BooleanField({ initial: false }),
      emp: new fields.BooleanField({ initial: false }),
      poison: new fields.BooleanField({ initial: false }),
      disease: new fields.BooleanField({ initial: false }),
      acid: new fields.BooleanField({ initial: false }),
      constrict: new fields.BooleanField({ initial: false }),
      spclDmg: new fields.BooleanField({ initial: false }),
      db: new fields.StringField({ choices: BRPSelectLists.getDamBonusOptions() }),
      att: new fields.StringField({ initial: '0' }),
      range1: new fields.StringField({ initial: 'S' }),
      range2: new fields.StringField({ initial: '' }),
      range3: new fields.StringField({ initial: '' }),
      hands: new fields.StringField({ choices: BRPSelectLists.getHandedOptions() }),
      crew: new fields.StringField({ }),
      hp: new fields.NumberField({ ...BRPItemModel.requiredInteger }),
      ap: new fields.NumberField({ ...BRPItemModel.requiredInteger }),
      hpCurr: new fields.NumberField({ ...BRPItemModel.requiredInteger }),
      ammoType: new fields.StringField({ }),
      ammo: new fields.StringField({ initial: '0' }),
      ammoCurr: new fields.NumberField({ ...BRPItemModel.requiredInteger }),
      mal: new fields.NumberField({ ...BRPItemModel.requiredInteger }),
      rof: new fields.StringField({ initial: '0' }),
      radius: new fields.NumberField({ ...BRPItemModel.requiredInteger }),
      parry: new fields.BooleanField({ initial: true }),
      str: new fields.NumberField({ ...BRPItemModel.requiredInteger }),
      dex: new fields.NumberField({ ...BRPItemModel.requiredInteger }),
      enc: new fields.NumberField({ ...BRPItemModel.requiredInteger }),
      price: new fields.StringField({ choices: BRPSelectLists.getPriceOptions() }),
      cost: new fields.NumberField({ ...BRPItemModel.requiredInteger, integer: false }),
      equipStatus: new fields.StringField({ choices: BRPSelectLists.getEquippedOptions('weapon'), initial: 'carried' }),
      coverage: new fields.StringField({ }),
      quantity: new fields.NumberField({ ...BRPItemModel.requiredInteger, initial: 1 }),
      npcVal: new fields.NumberField({ ...BRPItemModel.requiredInteger }),
      pSCurr: new fields.NumberField({ ...BRPItemModel.requiredInteger }),
      pSMax: new fields.NumberField({ ...BRPItemModel.requiredInteger }),
    }
  }

  static migrateData (source) {
    if (source.db.toString() === '0') {
      source.db = 'none'
    }
    return super.migrateData(source)
  }
}
