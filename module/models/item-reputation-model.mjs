import BRPItemModel from './item-model.mjs'

export default class BRPItemReputationModel extends BRPItemModel {
  static defineSchema() {
    const fields = foundry.data.fields
    return {
      ...BRPItemModel.defineSchemaBase(),
      base: new fields.NumberField({ ...BRPItemModel.requiredInteger }),
    }
  }
}
