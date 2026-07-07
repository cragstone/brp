import BRPItemModel from './item-model.mjs'

export default class BRPItemPassionModel extends BRPItemModel {
  static defineSchema() {
    const fields = foundry.data.fields
    return {
      ...BRPItemModel.defineSchemaBase(),
      base: new fields.NumberField({ ...BRPItemModel.requiredInteger }),
      improve: new fields.BooleanField({ initial: false }),
      xp: new fields.NumberField({ ...BRPItemModel.requiredInteger }),
    }
  }
}
