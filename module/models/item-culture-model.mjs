import BRPItemModel from './item-model.mjs'

export default class BRPItemCultureModel extends BRPItemModel {
  static defineSchema() {
    const fields = foundry.data.fields
    return {
      ...BRPItemModel.defineSchemaBase(),
      skills: new fields.ArrayField(
        new fields.SchemaField({
          uuid: new fields.DocumentUUIDField({ type: 'Item' }),
          brpid: new fields.StringField({ }),
          bonus: new fields.NumberField({ ...BRPItemModel.requiredInteger }),
        }),
      ),
      groups: new fields.ArrayField(
        new fields.SchemaField({
          options: new fields.NumberField({ ...BRPItemModel.requiredInteger }),
          skills: new fields.ArrayField(
            new fields.SchemaField({
              uuid: new fields.DocumentUUIDField({ type: 'Item' }),
              brpid: new fields.StringField({ }),
              bonus: new fields.NumberField({ ...BRPItemModel.requiredInteger }),
            }),
          )
        }),
      ),
      move: new fields.NumberField({ ...BRPItemModel.requiredInteger }),
      stats: new fields.SchemaField({
        str: new fields.SchemaField({
          formula: new fields.StringField({ nullable: false, initial: '3D6' }),
          mod: new fields.NumberField({ ...BRPItemModel.requiredInteger }),
        }),
        con: new fields.SchemaField({
          formula: new fields.StringField({ nullable: false, initial: '3D6' }),
          mod: new fields.NumberField({ ...BRPItemModel.requiredInteger }),
        }),
        int: new fields.SchemaField({
          formula: new fields.StringField({ nullable: false, initial: '2D6+6' }),
          mod: new fields.NumberField({ ...BRPItemModel.requiredInteger }),
        }),
        siz: new fields.SchemaField({
          formula: new fields.StringField({ nullable: false, initial: '2D6+6' }),
          mod: new fields.NumberField({ ...BRPItemModel.requiredInteger }),
        }),
        pow: new fields.SchemaField({
          formula: new fields.StringField({ nullable: false, initial: '3D6' }),
          mod: new fields.NumberField({ ...BRPItemModel.requiredInteger }),
        }),
        dex: new fields.SchemaField({
          formula: new fields.StringField({ nullable: false, initial: '3D6' }),
          mod: new fields.NumberField({ ...BRPItemModel.requiredInteger }),
        }),
        cha: new fields.SchemaField({
          formula: new fields.StringField({ nullable: false, initial: '3D6' }),
          mod: new fields.NumberField({ ...BRPItemModel.requiredInteger }),
        }),
        edu: new fields.SchemaField({
          formula: new fields.StringField({ nullable: false, initial: '2D6+6' }),
          mod: new fields.NumberField({ ...BRPItemModel.requiredInteger }),
        })
      }),
    }
  }
}
