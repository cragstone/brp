import { BRPSelectLists } from '../apps/select-lists.mjs';
import BRPItemModel from './item-model.mjs'

export default class BRPItemMagicModel extends BRPItemModel {
  static defineSchema() {
    const fields = foundry.data.fields
    return {
      ...BRPItemModel.defineSchemaBase(),
      base: new fields.NumberField({ ...BRPItemModel.requiredInteger }),
      xp: new fields.NumberField({ ...BRPItemModel.requiredInteger }),
      profession: new fields.NumberField({ ...BRPItemModel.requiredInteger }),
      personality: new fields.NumberField({ ...BRPItemModel.requiredInteger }),
      culture: new fields.NumberField({ ...BRPItemModel.requiredInteger }),
      personal: new fields.NumberField({ ...BRPItemModel.requiredInteger }),
      effects: new fields.NumberField({ ...BRPItemModel.requiredInteger, persisted: false }),
      category: new fields.StringField({ initial: '' }),
      impact: new fields.StringField({ choices: BRPSelectLists.getSpellCatOptions() }),
      range: new fields.StringField({ }),
      duration: new fields.StringField({ }),
      pppl:  new fields.NumberField({ ...BRPItemModel.requiredInteger, initial: 1 }),
      damage: new fields.StringField({ }),
      prsnlty: new fields.BooleanField({ initial: false }),
      occupation: new fields.BooleanField({ initial: false }),
      cultural: new fields.BooleanField({ initial: false }),
      mem: new fields.BooleanField({ initial: false }),
      improve: new fields.BooleanField({ initial: false }),
    }
  }

  static migrateData (source) {
    if (typeof source.pppl !== 'undefined' && isNaN(Number(source.pppl.toString().trim() || 'X'))) {
      source.pppl = 0
    }
    return super.migrateData(source)
  }
}
