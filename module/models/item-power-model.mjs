import { BRPSelectLists } from '../apps/select-lists.mjs';
import BRPItemModel from './item-model.mjs'

export default class BRPItemPowerModel extends BRPItemModel {
  static defineSchema() {
    const fields = foundry.data.fields
    return {
      ...BRPItemModel.defineSchemaBase(),
      level: new fields.StringField({ choices: BRPSelectLists.getPowerLvlOptions() }),
      category: new fields.StringField({ choices: BRPSelectLists.getPowerCatOptions() }),
    }
  }
}
