import BRPItemModel from './item-model.mjs'

export default class BRPItemSorceryModel extends BRPItemModel {
  static defineSchema() {
    const fields = foundry.data.fields
    return {
      ...BRPItemModel.defineSchemaBase(),
      mem: new fields.BooleanField({ initial: false }),
      range: new fields.StringField({ }),
      pppl: new fields.NumberField({ ...BRPItemModel.requiredInteger, initial: 1 }),
      powCost: new fields.StringField({ }),
      maxLvl: new fields.NumberField({ ...BRPItemModel.requiredInteger, initial: 1 }),
      currLvl: new fields.NumberField({ ...BRPItemModel.requiredInteger, initial: 1 }),
      memLvl: new fields.NumberField({ ...BRPItemModel.requiredInteger, initial: 1 }),
      var: new fields.BooleanField({ initial: false }),
    }
  }
}
