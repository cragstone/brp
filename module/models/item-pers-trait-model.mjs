import BRPItemModel from './item-model.mjs'

export default class BRPItemPersTraitModel extends BRPItemModel {
  static defineSchema() {
    const fields = foundry.data.fields
    return {
      ...BRPItemModel.defineSchemaBase(),
      oppName: new fields.StringField({ initial: '' }),
      base: new fields.NumberField({ ...BRPItemModel.requiredInteger }),
      improve: new fields.BooleanField({ initial: false }),
      oppimprove: new fields.BooleanField({ initial: false }),
      xp: new fields.NumberField({ ...BRPItemModel.requiredInteger }),
      basic: new fields.BooleanField({ initial: false }),
    }
  }
}
