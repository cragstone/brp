export default class ChaosiumCanvasInterface extends foundry.data.regionBehaviors.RegionBehaviorType {
  static get actionToggles () {
    return {
      [ChaosiumCanvasInterface.actionToggle.On]: 'BRP.ChaosiumCanvasInterface.Actions.Show',
      [ChaosiumCanvasInterface.actionToggle.Off]: 'BRP.ChaosiumCanvasInterface.Actions.Hide',
      [ChaosiumCanvasInterface.actionToggle.Toggle]: 'BRP.ChaosiumCanvasInterface.Actions.Toggle'
    }
  }

  static get actionToggle () {
    return {
      Off: 0,
      On: 1,
      Toggle: 2
    }
  }

  static get triggerButtons () {
    return {
      [ChaosiumCanvasInterface.triggerButton.Left]: 'BRP.ChaosiumCanvasInterface.Buttons.Left',
      [ChaosiumCanvasInterface.triggerButton.Right]: 'BRP.ChaosiumCanvasInterface.Buttons.Right'
    }
  }

  static get triggerButton () {
    return {
      Left: 0,
      Right: 2
    }
  }
}
