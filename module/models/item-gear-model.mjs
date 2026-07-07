import { BRPSelectLists } from '../apps/select-lists.mjs';
import BRPItemModel from './item-model.mjs'

export default class BRPItemGearModel extends BRPItemModel {
  static defineSchema() {
    const fields = foundry.data.fields
    return {
      ...BRPItemModel.defineSchemaBase(),
      quantity: new fields.NumberField({ ...BRPItemModel.requiredInteger, initial: 1 }),
      enc: new fields.NumberField({ ...BRPItemModel.requiredInteger, integer: false }),
      price: new fields.StringField({ choices: BRPSelectLists.getPriceOptions() }),
      cost: new fields.NumberField({ ...BRPItemModel.requiredInteger, integer: false }),
      equipStatus: new fields.StringField({ choices: BRPSelectLists.getEquippedOptions('gear') }),
      pSCurr: new fields.NumberField({ ...BRPItemModel.requiredInteger }),
      pSMax: new fields.NumberField({ ...BRPItemModel.requiredInteger }),
    }
  }
}
