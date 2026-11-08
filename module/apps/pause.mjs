export default class BRPPause extends foundry.applications.ui.GamePause {
  /**
   * @inheritdoc
   * @param {RenderOptions} options
   * @returns {Promise<ApplicationRenderContext>}
   */
  async _prepareContext (options) {
    const context = await super._prepareContext(options);
    context.icon = 'systems/brp/assets/pause.webp';
    return context;
  }
}