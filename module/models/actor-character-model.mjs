import { BRPSelectLists } from '../apps/select-lists.mjs';
import BRPActorModel from './actor-model.mjs'

export default class BRPActorCharacterModel extends BRPActorModel {
  static defineSchema() {
    const fields = foundry.data.fields
    return {
      ...BRPActorModel.defineSchemaBase(),
      stories: new fields.ArrayField(
        new fields.SchemaField({
          title: new fields.StringField({ }),
          value: new fields.HTMLField({ initial: '' })
        }),
      ),
      gender: new fields.StringField({ initial: '' }),
      culture: new fields.StringField({ initial: '' }),
      religion: new fields.StringField({ initial: '' }),
      personalityName: new fields.StringField({ initial: '' }),
      professionName: new fields.StringField({ initial: '' }),
      age: new fields.NumberField({ ...BRPActorModel.requiredInteger }),
      height: new fields.StringField({ initial: '' }),
      weight: new fields.StringField({ initial: '' }),
      wealth: new fields.NumberField({ choices: BRPSelectLists.getWealthOptions(0, 4) }),
      majorWnd: new fields.BooleanField({ initial: false }),
      minorWnd: new fields.BooleanField({ initial: false }),
      move: new fields.NumberField({ ...BRPActorModel.requiredInteger }),
      hand: new fields.StringField({ initial: '' }),
      lock: new fields.BooleanField({ initial: false }),
      skillOrder: new fields.BooleanField({ initial: false }),

      // Non persisted fields
      bleeding: new fields.BooleanField({ initial: false, persisted: false }),
      dead: new fields.BooleanField({ initial: false, persisted: false }),
      dmgBonus: new fields.SchemaField({
        dbl: new fields.StringField({ initial: '' }),
        full: new fields.StringField({ initial: '' }),
        half: new fields.StringField({ initial: '' }),
      },
      {
        persisted: false
      }),
      incapacitated: new fields.BooleanField({ initial: false, persisted: false }),
      injured: new fields.BooleanField({ initial: false, persisted: false }),
      severed: new fields.BooleanField({ initial: false, persisted: false }),
      skillcategory: new fields.TypedObjectField(
        new fields.NumberField({ ...BRPActorModel.requiredInteger }),
        {
          persisted: false
        }
      ),
      unconscious: new fields.BooleanField({ initial: false, persisted: false }),

      // Legacy fields used for data migration
      biography: new fields.StringField({ initial: '' }),
      background: new fields.StringField({ initial: '' }),
      backstory: new fields.StringField({ initial: '' }),

      // Unused fields
      // description (NPC field)
      // distincitve
    }
  }

  static migrateData (source) {
    if (typeof source.move !== 'undefined' && isNaN(Number(source.move.toString().trim() || 'X'))) {
      source.move = 0
    }
    return super.migrateData(source)
  }
}
