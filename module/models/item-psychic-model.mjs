import { BRPSelectLists } from '../apps/select-lists.mjs';
import BRPItemModel from './item-model.mjs'

export default class BRPItemPsychicModel extends BRPItemModel {
  static defineSchema() {
    const fields = foundry.data.fields
    return {
      ...BRPItemModel.defineSchemaBase(),
      base: new fields.NumberField({ ...BRPItemModel.requiredInteger }),
      xp: new fields.NumberField({ ...BRPItemModel.requiredInteger }),
      profession: new fields.NumberField({ ...BRPItemModel.requiredInteger }),
      personality: new fields.NumberField({ ...BRPItemModel.requiredInteger }),
      culture: new fields.NumberField({ ...BRPItemModel.requiredInteger }),
      personal: new fields.NumberField({ ...BRPItemModel.requiredInteger }),
      effects: new fields.NumberField({ ...BRPItemModel.requiredInteger, persisted: false }),
      category: new fields.StringField({ }), // Improve
      impact: new fields.StringField({ choices: BRPSelectLists.getSpellCatOptions(), initial: 'other' }),
      range: new fields.StringField({ }),
      duration: new fields.StringField({ }),
      pppl: new fields.StringField({ }), // Needs to be number
      damage: new fields.StringField({ }),
      prsnlty: new fields.BooleanField({ initial: false }),
      occupation: new fields.BooleanField({ initial: false }),
      cultural: new fields.BooleanField({ initial: false }),
      improve: new fields.BooleanField({ initial: false }),
    }
  }
}
