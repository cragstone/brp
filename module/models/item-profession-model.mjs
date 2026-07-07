import { BRPSelectLists } from '../apps/select-lists.mjs';
import BRPItemModel from './item-model.mjs'

export default class BRPItemProfessionModel extends BRPItemModel {
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
      powers: new fields.ArrayField(
        new fields.SchemaField({
          uuid: new fields.DocumentUUIDField({ type: 'Item' }),
          brpid: new fields.StringField({ }),
        }),
      ),
      minWealth: new fields.NumberField({ choices: BRPSelectLists.getWealthOptions(0, 4) }),
      maxWealth: new fields.NumberField({ choices: BRPSelectLists.getWealthOptions(0, 4) }),
    }
  }
}
