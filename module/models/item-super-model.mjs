import BRPItemModel from './item-model.mjs'

export default class BRPItemSuperModel extends BRPItemModel {
  static defineSchema() {
    const fields = foundry.data.fields
    return {
      ...BRPItemModel.defineSchemaBase(),
      powerMod: new fields.ArrayField(
        new fields.SchemaField({
          uuid: new fields.DocumentUUIDField({ type: 'Item' }),
          brpid: new fields.StringField({ }),
        }),
      ),
      cpc: new fields.StringField({ initial: '1' }),
      cpcSpent: new fields.NumberField({ ...BRPItemModel.requiredInteger }),
      level: new fields.NumberField({ ...BRPItemModel.requiredInteger, initial: 1 }),
      range: new fields.StringField({ }),
      duration: new fields.StringField({ }),
      pppl: new fields.NumberField({ ...BRPItemModel.requiredInteger, initial: 1 }),
      specialism: new fields.BooleanField({ initial: false }),
      specName: new fields.StringField({ }),
      mainName: new fields.StringField({ }),
      chosen: new fields.BooleanField({ initial: false }),
    }
  }

  static migrateData (source) {
    if (typeof source.pppl !== 'undefined' && isNaN(Number(source.pppl.toString().trim() || 'X'))) {
      source.pppl = 0
    }
    return super.migrateData(source)
  }
}
