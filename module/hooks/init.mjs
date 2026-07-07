import { registerSheets } from '../setup/register-sheets.mjs'
import { BRPID } from '../brpid/brpid.mjs'
import { BRPActor } from '../actor/actor.mjs'
import { BRPItem } from '../item/item.mjs'
import { BRP } from "../setup/config.mjs";
//import ChaosiumCanvasInterfaceInit from '../apps/chaosium-canvas-interface-init.mjs'
import BRPClickableEvents from '../apps/clickable-events.mjs';
import { registerSettings } from '../settings/register-settings.mjs'
import { handlebarsHelper } from '../setup/handlebar-helper.mjs';
import { BRPCombat } from "../combat/combat.mjs";
import { BRPCombatTracker } from "../combat/combat-tracker.mjs";
import { BRPActiveEffect } from "../apps/active-effect.mjs";
import { BRPCheck } from '../apps/check.mjs';
import BRPActorCharacterModel from '../models/actor-character-model.mjs'
import BRPActorNpcModel from '../models/actor-npc-model.mjs'
import BRPItemAllegianceModel from '../models/item-allegiance-model.mjs'
import BRPItemArmourModel from '../models/item-armour-model.mjs'
import BRPItemCultureModel from '../models/item-culture-model.mjs'
import BRPItemFailingModel from '../models/item-failing-model.mjs'
import BRPItemGearModel from '../models/item-gear-model.mjs'
import BRPItemHitLocationModel from '../models/item-hit-location-model.mjs'
import BRPItemMagicModel from '../models/item-magic-model.mjs'
import BRPItemMutationModel from '../models/item-mutation-model.mjs'
import BRPItemPassionModel from '../models/item-passion-model.mjs'
import BRPItemPersTraitModel from '../models/item-pers-trait-model.mjs'
import BRPItemPersonalityModel from '../models/item-personality-model.mjs'
import BRPItemPowerModel from '../models/item-power-model.mjs'
import BRPItemPowerModModel from '../models/item-power-mod-model.mjs'
import BRPItemProfessionModel from '../models/item-profession-model.mjs'
import BRPItemPsychicModel from '../models/item-psychic-model.mjs'
import BRPItemReputationModel from '../models/item-reputation-model.mjs'
import BRPItemSkillModel from '../models/item-skill-model.mjs'
import BRPItemSkillCatModel from '../models/item-skill-cat-model.mjs'
import BRPItemSorceryModel from '../models/item-sorcery-model.mjs'
import BRPItemSuperModel from '../models/item-super-model.mjs'
import BRPItemWeaponModel from '../models/item-weapon-model.mjs'
import BRPItemWoundModel from '../models/item-wound-model.mjs'

export default function Init() {
  //Add classes to global game object
  game.brp = {
    BRPActor,
    BRPItem,
    rollItemMacro,
    rollCharMacro,
    ClickRegionLeftUuid: BRPClickableEvents.ClickRegionLeftUuid,
    ClickRegionRightUuid: BRPClickableEvents.ClickRegionRightUuid,
    hasPermissionDocument: BRPClickableEvents.hasPermissionDocument,
    InSceneRelativeTeleport: BRPClickableEvents.InSceneRelativeTeleport,
    MapPinToggle: BRPClickableEvents.MapPinToggle,
    openDocument: BRPClickableEvents.openDocument,
    toggleTileJournalPages: BRPClickableEvents.toggleTileJournalPages,
    toScene: BRPClickableEvents.toScene,
  };
  //Add Custom Configuration
  CONFIG.BRP = BRP;

  //Register Settings and Handlebar Helpers
  registerSettings();
  handlebarsHelper();

  // Define custom Document classes
  CONFIG.Actor.documentClass = BRPActor;
  CONFIG.Item.documentClass = BRPItem;
  CONFIG.Combat.documentClass = BRPCombat;
  CONFIG.ui.combat = BRPCombatTracker;
  CONFIG.ActiveEffect.documentClass = BRPActiveEffect;

  CONFIG.Actor.dataModels.character = BRPActorCharacterModel
  CONFIG.Actor.dataModels.npc = BRPActorNpcModel

  CONFIG.Item.dataModels.allegiance = BRPItemAllegianceModel
  CONFIG.Item.dataModels.armour = BRPItemArmourModel
  CONFIG.Item.dataModels.culture = BRPItemCultureModel
  CONFIG.Item.dataModels.failing = BRPItemFailingModel
  CONFIG.Item.dataModels.gear = BRPItemGearModel
  CONFIG.Item.dataModels['hit-location'] = BRPItemHitLocationModel
  CONFIG.Item.dataModels.magic = BRPItemMagicModel
  CONFIG.Item.dataModels.mutation = BRPItemMutationModel
  CONFIG.Item.dataModels.passion = BRPItemPassionModel
  CONFIG.Item.dataModels.persTrait = BRPItemPersTraitModel
  CONFIG.Item.dataModels.personality = BRPItemPersonalityModel
  CONFIG.Item.dataModels.power = BRPItemPowerModel
  CONFIG.Item.dataModels.powerMod = BRPItemPowerModModel
  CONFIG.Item.dataModels.profession = BRPItemProfessionModel
  CONFIG.Item.dataModels.psychic = BRPItemPsychicModel
  CONFIG.Item.dataModels.reputation = BRPItemReputationModel
  CONFIG.Item.dataModels.skill = BRPItemSkillModel
  CONFIG.Item.dataModels.skillcat = BRPItemSkillCatModel
  CONFIG.Item.dataModels.sorcery = BRPItemSorceryModel
  CONFIG.Item.dataModels.super = BRPItemSuperModel
  CONFIG.Item.dataModels.weapon = BRPItemWeaponModel
  CONFIG.Item.dataModels.wound = BRPItemWoundModel

  BRPClickableEvents.initSelf()
  BRPID.init()
  registerSheets()

  // Active Effects are never copied to the Actor,
  // but will still apply to the Actor from within the Item
  // if the transfer property on the Active Effect is true.
  CONFIG.ActiveEffect.legacyTransferral = true;

}

// Run a Macro from an Item drop.
function rollItemMacro(itemUuid) {
  // Reconstruct the drop data so that we can load the item.
  const dropData = {
    type: 'Item',
    uuid: itemUuid
  };
  // Load the item from the uuid.
  Item.fromDropData(dropData).then(item => {
    // Determine if the item loaded and if it's an owned item.
    if (!item || !item.parent) {
      const itemName = item?.name ?? itemUuid;
      return ui.notifications.warn(`Could not find item ${itemName}. You may need to delete and recreate this macro.`);
    }

    // Trigger the item roll
    item.roll();
  });
}

//Roll a Characteristic Roll for an actor from the hotbar - work in progress
function rollCharMacro(actor, characteristic) {
  BRPCheck._trigger({
    rollType: 'CH',
    cardType: 'NO',
    characteristic,
    shiftKey: 'false',
    actor: actor,
    token: ""
  })
}
