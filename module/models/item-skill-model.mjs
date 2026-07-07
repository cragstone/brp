import { BRPSelectLists } from '../apps/select-lists.mjs';
import BRPItemModel from './item-model.mjs'

export default class BRPItemSkillModel extends BRPItemModel {
  static defineSchema() {
    const fields = foundry.data.fields
    return {
      ...BRPItemModel.defineSchemaBase(),
      base: new fields.NumberField({ ...BRPItemModel.requiredInteger }),
      xp: new fields.NumberField({ ...BRPItemModel.requiredInteger }),
      culture: new fields.NumberField({ ...BRPItemModel.requiredInteger }),
      profession: new fields.NumberField({ ...BRPItemModel.requiredInteger }),
      personality: new fields.NumberField({ ...BRPItemModel.requiredInteger }),
      personal: new fields.NumberField({ ...BRPItemModel.requiredInteger }),
      effects: new fields.NumberField({ ...BRPItemModel.requiredInteger }),
      baseFormula: new fields.SchemaField({
        1: new fields.SchemaField({
          stat: new fields.StringField({ choices: BRPSelectLists.getStatOptions(), initial: 'fixed' }),
          value: new fields.NumberField({ ...BRPItemModel.requiredInteger }),
        }),
        2: new fields.SchemaField({
          stat: new fields.StringField({ choices: BRPSelectLists.getStatOptions(), initial: 'fixed' }),
          value: new fields.NumberField({ ...BRPItemModel.requiredInteger }),
        }),
        Func: new fields.StringField({ choices: BRPSelectLists.getFunctionalOptions(), initial: 'or' }),
      }),
      noXP: new fields.BooleanField({ initial: false }),
      category: new fields.StringField({ initial: '' }),
      chosen: new fields.BooleanField({ initial: false }),
      specialism: new fields.BooleanField({ initial: false }),
      group: new fields.BooleanField({ initial: false }),
      groupSkills: new fields.ArrayField(
        new fields.SchemaField({
          uuid: new fields.DocumentUUIDField({ type: 'Item' }),
          brpid: new fields.StringField({ }),
        }),
      ),
      variable: new fields.BooleanField({ initial: false }),
      specName: new fields.StringField({ }),
      mainName: new fields.StringField({ }),
      prsnlty: new fields.BooleanField({ initial: false }),
      occupation: new fields.BooleanField({ initial: false }),
      cultural: new fields.BooleanField({ initial: false }),
      improve: new fields.BooleanField({ initial: false }),
      basic: new fields.BooleanField({ initial: false }),
      combat: new fields.BooleanField({ initial: false }),
    }
  }
}
