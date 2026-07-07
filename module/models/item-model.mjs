export default class BRPItemModel extends foundry.abstract.TypeDataModel {
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
      description: new fields.HTMLField({ initial: '' }),
      gmNotes: new fields.HTMLField({ initial: '' }),
    }
  }
}
