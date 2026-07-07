import { BRPSelectLists } from '../apps/select-lists.mjs';
import BRPItemModel from './item-model.mjs'

export default class BRPItemSkillCatModel extends BRPItemModel {
  static defineSchema() {
    const fields = foundry.data.fields
    return {
      ...BRPItemModel.defineSchemaBase(),
      attrib: new fields.SchemaField({
        str: new fields.NumberField({ choices: BRPSelectLists.getAdvSkillCatOptions() }),
        con: new fields.NumberField({ choices: BRPSelectLists.getAdvSkillCatOptions() }),
        int: new fields.NumberField({ choices: BRPSelectLists.getAdvSkillCatOptions() }),
        siz: new fields.NumberField({ choices: BRPSelectLists.getAdvSkillCatOptions() }),
        pow: new fields.NumberField({ choices: BRPSelectLists.getAdvSkillCatOptions() }),
        dex: new fields.NumberField({ choices: BRPSelectLists.getAdvSkillCatOptions() }),
        cha: new fields.NumberField({ choices: BRPSelectLists.getAdvSkillCatOptions() }),
        edu: new fields.NumberField({ choices: BRPSelectLists.getAdvSkillCatOptions() }),
      }),
      stat: new fields.StringField({ choices: BRPSelectLists.addStatOptions(true) }),
      mod: new fields.NumberField({ ...BRPItemModel.requiredInteger }),
    }
  }
}
