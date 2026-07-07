import { BRPSelectLists } from '../apps/select-lists.mjs';
import BRPActorModel from './actor-model.mjs'

export default class BRPActorNpcModel extends BRPActorModel {
  static defineSchema() {
    const fields = foundry.data.fields
    return {
      ...BRPActorModel.defineSchemaBase(),
      extDesc: new fields.HTMLField({ initial: '' }),
      majorWnd: new fields.BooleanField({ initial: false }),
      minorWnd: new fields.BooleanField({ initial: false }),
      moveTitle: new fields.StringField({ initial: 'Move' }),
      move: new fields.NumberField({ ...BRPActorModel.requiredInteger }),
      altMoveTitle: new fields.StringField({ initial: 'Alt Move' }),
      altMove: new fields.StringField({ initial: '0' }),
      lock: new fields.BooleanField({ initial: false }),
      viewTab: new fields.NumberField({ choices: [1, 2], initial: 2 }),
      showNotes: new fields.BooleanField({ initial: false }),
      sanLoss: new fields.StringField({ nullable: false, initial: '' }),
      sanDesc: new fields.StringField({ nullable: false, initial: '' }),
      movDesc: new fields.StringField({ nullable: false, initial: '' }),
      ap: new fields.NumberField({ ...BRPActorModel.requiredInteger }),
      bap: new fields.NumberField({ ...BRPActorModel.requiredInteger }),
      apRnd: new fields.StringField({ nullable: false, initial: '' }),
      bapRnd: new fields.StringField({ nullable: false, initial: '' }),
      baseStats: new fields.SchemaField({
        str: new fields.SchemaField({
          random: new fields.StringField({ nullable: false, initial: '3D6' }),
          average: new fields.StringField({ nullable: false, initial: '1D2+9' }),
        }),
        con: new fields.SchemaField({
          random: new fields.StringField({ nullable: false, initial: '3D6' }),
          average: new fields.StringField({ nullable: false, initial: '1D2+9' }),
        }),
        int: new fields.SchemaField({
          random: new fields.StringField({ nullable: false, initial: '3D6' }),
          average: new fields.StringField({ nullable: false, initial: '1D2+9' }),
        }),
        siz: new fields.SchemaField({
          random: new fields.StringField({ nullable: false, initial: '3D6' }),
          average: new fields.StringField({ nullable: false, initial: '1D2+9' }),
        }),
        pow: new fields.SchemaField({
          random: new fields.StringField({ nullable: false, initial: '3D6' }),
          average: new fields.StringField({ nullable: false, initial: '1D2+9' }),
        }),
        dex: new fields.SchemaField({
          random: new fields.StringField({ nullable: false, initial: '3D6' }),
          average: new fields.StringField({ nullable: false, initial: '1D2+9' }),
        }),
        cha: new fields.SchemaField({
          random: new fields.StringField({ nullable: false, initial: '3D6' }),
          average: new fields.StringField({ nullable: false, initial: '1D2+9' }),
        }),
        edu: new fields.SchemaField({
          random: new fields.StringField({ nullable: false, initial: '3D6' }),
          average: new fields.StringField({ nullable: false, initial: '1D2+9' }),
        })
      }),
      hp: new fields.SchemaField({
        stat1: new fields.StringField({ choices: BRPSelectLists.addStatOptions(true), initial: 'siz' }),
        stat2: new fields.StringField({ choices: BRPSelectLists.addStatOptions(true), initial: 'con' }),
        multi: new fields.NumberField({ ...BRPActorModel.requiredInteger, integer: false, initial: 0.5 }),
      }),
      mod: new fields.SchemaField({
        strdb: new fields.BooleanField({ initial: false }),
      }),

      // Legacy fields used for data migration
      description: new fields.StringField({ initial: '' }),
    }
  }
}
