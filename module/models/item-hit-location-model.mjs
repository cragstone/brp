import { BRPSelectLists } from '../apps/select-lists.mjs';
import BRPItemModel from './item-model.mjs'

export default class BRPItemHitLocationModel extends BRPItemModel {
  static defineSchema() {
    const fields = foundry.data.fields
    return {
      displayName: new fields.StringField({ }),
      creatureType: new fields.StringField({ }),
      lowRoll: new fields.NumberField({ ...BRPItemModel.requiredInteger }),
      highRoll: new fields.NumberField({ ...BRPItemModel.requiredInteger }),
      fractionHP: new fields.NumberField({ ...BRPItemModel.requiredInteger, initial: 1 }),
      fractionENC: new fields.NumberField({ ...BRPItemModel.requiredInteger, initial: 1 }),
      hide: new fields.BooleanField({ initial: true }),
      locType: new fields.StringField({ choices: BRPSelectLists.getHitLocType(), initial: 'limb' }),
      bleeding: new fields.BooleanField({ initial: false }),
      dead: new fields.BooleanField({ initial: false }),
      severed: new fields.BooleanField({ initial: false }),
      incapacitated: new fields.BooleanField({ initial: false }),
      currHP: new fields.NumberField({ ...BRPItemModel.requiredInteger }),
      adj: new fields.NumberField({ ...BRPItemModel.requiredInteger }),
      apRnd: new fields.StringField({ initial: '0' }),
      bapRnd: new fields.StringField({ initial: '0' }),
      ap: new fields.NumberField({ ...BRPItemModel.requiredInteger }),
      bap: new fields.NumberField({ ...BRPItemModel.requiredInteger }),

      // Non persisted fields
      maxHP: new fields.NumberField({ ...BRPItemModel.requiredInteger, persisted: false }),
    }
  }
}
