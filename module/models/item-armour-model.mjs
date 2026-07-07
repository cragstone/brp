import { BRPSelectLists } from '../apps/select-lists.mjs';
import BRPItemModel from './item-model.mjs'

export default class BRPItemArmourModel extends BRPItemModel {
  static defineSchema() {
    const fields = foundry.data.fields
    return {
      ...BRPItemModel.defineSchemaBase(),
      av1: new fields.NumberField({ ...BRPItemModel.requiredInteger }),
      av2: new fields.NumberField({ ...BRPItemModel.requiredInteger }),
      avr1: new fields.StringField({ }),
      avr2: new fields.StringField({ }),
      armVar: new fields.BooleanField({ initial: false }),
      armBal: new fields.BooleanField({ initial: false }),
      burden: new fields.StringField({ choices: BRPSelectLists.getArmourBurdenOptions() }),
      enc: new fields.NumberField({ ...BRPItemModel.requiredInteger }),
      mnplmod: new fields.NumberField({ ...BRPItemModel.requiredInteger }),
      percmod: new fields.NumberField({ ...BRPItemModel.requiredInteger }),
      physmod: new fields.NumberField({ ...BRPItemModel.requiredInteger }),
      stealthmod: new fields.NumberField({ ...BRPItemModel.requiredInteger }),
      sizRng: new fields.NumberField({ ...BRPItemModel.requiredInteger }),
      time: new fields.NumberField({ ...BRPItemModel.requiredInteger, initial: 1 }),
      quantity: new fields.NumberField({ ...BRPItemModel.requiredInteger, initial: 1 }),
      ppMax: new fields.NumberField({ ...BRPItemModel.requiredInteger }),
      ppCurr: new fields.NumberField({ ...BRPItemModel.requiredInteger }),
      price: new fields.StringField({ choices: BRPSelectLists.getPriceOptions() }),
      cost: new fields.NumberField({ ...BRPItemModel.requiredInteger, integer: false }),
      hitlocID: new fields.StringField({ }),
      equipStatus: new fields.StringField({ choices: BRPSelectLists.getEquippedOptions('armour'), initial: 'carried' }),
      HPL: new fields.BooleanField({ initial: false }),
      coverage: new fields.StringField({ }),
      pSCurr: new fields.NumberField({ ...BRPItemModel.requiredInteger }),
      pSMax: new fields.NumberField({ ...BRPItemModel.requiredInteger }),
    }
  }
}
