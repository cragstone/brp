import BRPDialog from '../setup/brp-dialog.mjs';
import { BRPActiveEffect } from "../apps/active-effect.mjs"

export class BRPActiveEffectSheet {
  static getItemEffectsFromDocument(document) {
    let thisDocument = document.effects.reduce((c, i) => {
      c.push({
        id: i.id,
        uuid: i.uuid,
        name: i.name
      })
      return c
    }, [])
    return (document.items ?? []).reduce((c, i) => {
      for (const effect of i.effects) {
        c.push({
          id: effect.id,
          uuid: effect.uuid,
          name: effect.name
        })
      }
      return c
    }, thisDocument)
  }

  static getEffectChangesFromDocument(document) {
    const effectChanges = []
    const effectKeys = foundry.utils.duplicate(CONFIG.BRP.keysActiveEffects)
    for (const effect of document.effects) {
      for (const change of effect.system.changes) {
        let negative = false
        let value = Math.abs(change.value)
        switch (change.type) {
          case 'add':
            negative = (change.value < 0)
            break
          case 'subtract':
            negative = (change.value > 0)
            break
          default:
            value = change.type + ' ' + change.value
            break
        }
        effectChanges.push({
          key: change.key,
          type: change.type,
          name: effectKeys[change.key] ?? change.key,
          negative,
          value,
          source: effect.name,
          itemSource: effect.parent.name
        })
      }
    }
    return effectChanges
  }

  static async getActorEffectsFromDocument(document) {
    const effectKeys = foundry.utils.duplicate(CONFIG.BRP.keysActiveEffects)
    let aEffects = this.getItemEffectsFromDocument(document)
    let effects = []
    for (let eff of aEffects) {
      let brpAE = await fromUuid(eff.uuid)
      if (brpAE) {
        const sourceItem = (brpAE.parent.parent instanceof Item ? brpAE.parent.parent : brpAE.parent instanceof Item ? true : false)
        const sourceName = (brpAE.parent.parent instanceof Item ? brpAE.parent.parent : brpAE.parent instanceof Item ? brpAE.parent.name : game.i18n.localize('BRP.direct'))
        const container = (brpAE.parent.parent instanceof Item ? brpAE.parent.parent : brpAE.parent instanceof Item ? brpAE.parent : brpAE)
        let count = 0;
        for (let chng of brpAE.changes) {
          effects.push({
            id: container.id,
            sourceName: sourceName,
            effectName: brpAE.name,
            sourceItem,
            key: chng.key,
            name: game.i18n.localize((effectKeys[chng.key] ?? chng.key)),
            value: chng.value,
            isActive: brpAE.active ?? false,
            effUuid: eff.uuid,
            counter: count
          })
          count++;
        }
      }
    }
    return effects
  }

  static activateListeners(document) {
    if (game.user.isGM) {
      document.element.querySelectorAll('div[data-action="openActiveEffect"]').forEach(n => n.addEventListener("click", BRPActiveEffectSheet._onOpenActiveEffect.bind(document)))
      document.element.querySelectorAll('div[data-action="createEffect"]').forEach(n => n.addEventListener("click", BRPActiveEffectSheet._onAddItemEffect.bind(document)))
      new foundry.applications.ux.DragDrop({
        dragSelector: '.draggable',
        permissions: {
          dragstart: true
        },
        callbacks: {
          dragstart: BRPActiveEffectSheet._onDragStart.bind(document)
        }
      }).bind(document.element)

    }
  }

  static _onDragStart (event) {
    const dragData = this.document.effects.get(event.target.dataset.effectId).toDragData()
    event.dataTransfer.setData('text/plain', JSON.stringify(dragData))
  }

  static async _onAddItemEffect(event) {
    this.document.createEmbeddedDocuments('ActiveEffect', [{ name: ActiveEffect.defaultName({ parent: this.document }) }])
  }

  static async _onOpenActiveEffect(event) {
    const uuid = event.currentTarget.dataset.uuid
    if (uuid) {
      const doc = await fromUuid(uuid);
      if (doc) {
        if (event.ctrlKey) {
          const confirmation = await BRPDialog.confirm({
            window: { title: game.i18n.format('BRP.deleteDoc', {type: game.i18n.localize('DOCUMENT.ActiveEffect')}) },
            content: game.i18n.localize('BRP.deleteConfirm') + '<br><strong> ' + game.i18n.localize('DOCUMENT.ActiveEffect') + ': ' + doc.name + '</strong>'
          })
          if (confirmation) {
            await doc.delete();
          }
        } else {
          doc.sheet.render(true);
        }
      }
    }
  }
}
