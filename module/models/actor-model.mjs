export default class BRPActorModel extends foundry.abstract.TypeDataModel {
  static get requiredInteger () {
    return {
      required: true,
      nullable: false,
      integer: true,
      initial: 0,
    }
  }

  static defineSchemaBase () {
    const fields = foundry.data.fields
    return {
      stats: new fields.SchemaField({
        str: new fields.SchemaField({
          base: new fields.NumberField({ ...BRPActorModel.requiredInteger }),
          redist: new fields.NumberField({ ...BRPActorModel.requiredInteger }),
          culture: new fields.NumberField({ ...BRPActorModel.requiredInteger }),
          exp: new fields.NumberField({ ...BRPActorModel.requiredInteger }),
          age: new fields.NumberField({ ...BRPActorModel.requiredInteger }),
          effects: new fields.NumberField({ ...BRPActorModel.requiredInteger }),
          cost: new fields.NumberField({ ...BRPActorModel.requiredInteger, initial: 1 }),
          formula: new fields.StringField({ nullable: false, initial: '' }),
        }),
        con: new fields.SchemaField({
          base: new fields.NumberField({ ...BRPActorModel.requiredInteger }),
          redist: new fields.NumberField({ ...BRPActorModel.requiredInteger }),
          culture: new fields.NumberField({ ...BRPActorModel.requiredInteger }),
          exp: new fields.NumberField({ ...BRPActorModel.requiredInteger }),
          age: new fields.NumberField({ ...BRPActorModel.requiredInteger }),
          effects: new fields.NumberField({ ...BRPActorModel.requiredInteger }),
          cost: new fields.NumberField({ ...BRPActorModel.requiredInteger, initial: 1 }),
          formula: new fields.StringField({ nullable: false, initial: '' }),
        }),
        int: new fields.SchemaField({
          base: new fields.NumberField({ ...BRPActorModel.requiredInteger }),
          redist: new fields.NumberField({ ...BRPActorModel.requiredInteger }),
          culture: new fields.NumberField({ ...BRPActorModel.requiredInteger }),
          exp: new fields.NumberField({ ...BRPActorModel.requiredInteger }),
          age: new fields.NumberField({ ...BRPActorModel.requiredInteger }),
          effects: new fields.NumberField({ ...BRPActorModel.requiredInteger }),
          cost: new fields.NumberField({ ...BRPActorModel.requiredInteger, initial: 3 }),
          formula: new fields.StringField({ nullable: false, initial: '' }),
        }),
        siz: new fields.SchemaField({
          base: new fields.NumberField({ ...BRPActorModel.requiredInteger }),
          redist: new fields.NumberField({ ...BRPActorModel.requiredInteger }),
          culture: new fields.NumberField({ ...BRPActorModel.requiredInteger }),
          exp: new fields.NumberField({ ...BRPActorModel.requiredInteger }),
          age: new fields.NumberField({ ...BRPActorModel.requiredInteger }),
          effects: new fields.NumberField({ ...BRPActorModel.requiredInteger }),
          cost: new fields.NumberField({ ...BRPActorModel.requiredInteger, initial: 1 }),
          formula: new fields.StringField({ nullable: false, initial: '' }),
        }),
        pow: new fields.SchemaField({
          base: new fields.NumberField({ ...BRPActorModel.requiredInteger }),
          redist: new fields.NumberField({ ...BRPActorModel.requiredInteger }),
          culture: new fields.NumberField({ ...BRPActorModel.requiredInteger }),
          exp: new fields.NumberField({ ...BRPActorModel.requiredInteger }),
          age: new fields.NumberField({ ...BRPActorModel.requiredInteger }),
          effects: new fields.NumberField({ ...BRPActorModel.requiredInteger }),
          cost: new fields.NumberField({ ...BRPActorModel.requiredInteger, initial: 3 }),
          improve: new fields.BooleanField({ initial: false }),
          formula: new fields.StringField({ nullable: false, initial: '' }),
        }),
        dex: new fields.SchemaField({
          base: new fields.NumberField({ ...BRPActorModel.requiredInteger }),
          redist: new fields.NumberField({ ...BRPActorModel.requiredInteger }),
          culture: new fields.NumberField({ ...BRPActorModel.requiredInteger }),
          exp: new fields.NumberField({ ...BRPActorModel.requiredInteger }),
          age: new fields.NumberField({ ...BRPActorModel.requiredInteger }),
          effects: new fields.NumberField({ ...BRPActorModel.requiredInteger }),
          cost: new fields.NumberField({ ...BRPActorModel.requiredInteger, initial: 3 }),
          formula: new fields.StringField({ nullable: false, initial: '' }),
        }),
        cha: new fields.SchemaField({
          base: new fields.NumberField({ ...BRPActorModel.requiredInteger }),
          redist: new fields.NumberField({ ...BRPActorModel.requiredInteger }),
          culture: new fields.NumberField({ ...BRPActorModel.requiredInteger }),
          exp: new fields.NumberField({ ...BRPActorModel.requiredInteger }),
          age: new fields.NumberField({ ...BRPActorModel.requiredInteger }),
          effects: new fields.NumberField({ ...BRPActorModel.requiredInteger }),
          cost: new fields.NumberField({ ...BRPActorModel.requiredInteger, initial: 1 }),
          formula: new fields.StringField({ nullable: false, initial: '' }),
        }),
        edu: new fields.SchemaField({
          base: new fields.NumberField({ ...BRPActorModel.requiredInteger }),
          redist: new fields.NumberField({ ...BRPActorModel.requiredInteger }),
          culture: new fields.NumberField({ ...BRPActorModel.requiredInteger }),
          exp: new fields.NumberField({ ...BRPActorModel.requiredInteger }),
          age: new fields.NumberField({ ...BRPActorModel.requiredInteger }),
          effects: new fields.NumberField({ ...BRPActorModel.requiredInteger }),
          cost: new fields.NumberField({ ...BRPActorModel.requiredInteger, initial: 3 }),
          formula: new fields.StringField({ nullable: false, initial: '' }),
        }),
      }),
      health: new fields.SchemaField({
        value: new fields.NumberField({ ...BRPActorModel.requiredInteger, initial: 10 }),
        mod: new fields.NumberField({ ...BRPActorModel.requiredInteger }),
        max: new fields.NumberField({ ...BRPActorModel.requiredInteger, initial: 10 }),
        mjrwnd: new fields.NumberField({ ...BRPActorModel.requiredInteger, initial: 5 }),
        daily: new fields.NumberField({ ...BRPActorModel.requiredInteger }),
        effects: new fields.NumberField({ ...BRPActorModel.requiredInteger }),
      }),
      power: new fields.SchemaField({
        value: new fields.NumberField({ ...BRPActorModel.requiredInteger, initial: 5 }),
        mod: new fields.NumberField({ ...BRPActorModel.requiredInteger }),
        max: new fields.NumberField({ ...BRPActorModel.requiredInteger, initial: 5 }),
        battVal: new fields.NumberField({ ...BRPActorModel.requiredInteger }),
        battMax: new fields.NumberField({ ...BRPActorModel.requiredInteger }),
        effects: new fields.NumberField({ ...BRPActorModel.requiredInteger }),
      }),
      fatigue: new fields.SchemaField({
        value: new fields.NumberField({ ...BRPActorModel.requiredInteger, initial: 5 }),
        mod: new fields.NumberField({ ...BRPActorModel.requiredInteger }),
        max: new fields.NumberField({ ...BRPActorModel.requiredInteger, initial: 5 }),
        effects: new fields.NumberField({ ...BRPActorModel.requiredInteger }),
      }),
      sanity: new fields.SchemaField({
        value: new fields.NumberField({ ...BRPActorModel.requiredInteger, initial: 5 }),
        max: new fields.NumberField({ ...BRPActorModel.requiredInteger, initial: 5 }),
      }),
      res5: new fields.SchemaField({
        value: new fields.NumberField({ ...BRPActorModel.requiredInteger }),
        max: new fields.NumberField({ ...BRPActorModel.requiredInteger }),
      }),
      wealthValue: new fields.NumberField({ ...BRPActorModel.requiredInteger }),
    }
  }
}
