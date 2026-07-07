import BRPItemModel from './item-model.mjs'

export default class BRPItemWoundModel extends BRPItemModel {
  static defineSchema() {
    const fields = foundry.data.fields
    return {
      value: new fields.NumberField({ ...BRPItemModel.requiredInteger, initial: 1 }),
      treated: new fields.BooleanField({ initial: false }),
      locId: new fields.StringField({ initial: '' }),
    }
  }
}
