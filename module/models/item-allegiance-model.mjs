import BRPItemModel from './item-model.mjs'

export default class BRPItemAllegianceModel extends BRPItemModel {
  static defineSchema() {
    const fields = foundry.data.fields
    return {
      ...BRPItemModel.defineSchemaBase(),
      allegPoints: new fields.NumberField({ ...BRPItemModel.requiredInteger }),
      opposeAlleg: new fields.StringField({ }),
      allegTitle: new fields.StringField({ }),
      improve: new fields.BooleanField({ initial: false }),
      allegEnemy: new fields.BooleanField({ initial: false }),
      allegAllied: new fields.BooleanField({ initial: false }),
      allegApoth: new fields.BooleanField({ initial: false }),
      benefits: new fields.HTMLField({ initial: '' }),
      xp: new fields.NumberField({ ...BRPItemModel.requiredInteger }),
    }
  }
}
