import { BRPSelectLists } from '../apps/select-lists.mjs';
import BRPItemModel from './item-model.mjs'

export default class BRPItemMutationModel extends BRPItemModel {
  static defineSchema() {
    const fields = foundry.data.fields
    return {
      ...BRPItemModel.defineSchemaBase(),
      impact: new fields.StringField({ choices: BRPSelectLists.getMutationCatOptions(), initial: 'adv' }),
      minorOnly: new fields.BooleanField({ initial: false }),
      minor: new fields.BooleanField({ initial: true }),
    }
  }
}
