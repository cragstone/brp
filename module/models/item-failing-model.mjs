import BRPItemModel from './item-model.mjs'

export default class BRPItemFailingModel extends BRPItemModel {
  static defineSchema() {
    const fields = foundry.data.fields
    return {
      ...BRPItemModel.defineSchemaBase(),
      shortDesc: new fields.StringField({ }),
      cpcMod: new fields.NumberField({ ...BRPItemModel.requiredInteger }),
    }
  }
}
