import BRPItemModel from './item-model.mjs'

export default class BRPItemPersonalityModel extends BRPItemModel {
  static defineSchema() {
    const fields = foundry.data.fields
    return {
      ...BRPItemModel.defineSchemaBase(),
      skills: new fields.ArrayField(
        new fields.SchemaField({
          uuid: new fields.DocumentUUIDField({ type: 'Item' }),
          brpid: new fields.StringField({ }),
        }),
      ),
      groups: new fields.ArrayField(
        new fields.SchemaField({
          options: new fields.NumberField({ ...BRPItemModel.requiredInteger }),
          skills: new fields.ArrayField(
            new fields.SchemaField({
              uuid: new fields.DocumentUUIDField({ type: 'Item' }),
              brpid: new fields.StringField({ }),
            }),
          )
        }),
      ),
    }
  }
}
