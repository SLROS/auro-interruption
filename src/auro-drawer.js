// Copyright (c) Alaska Air. All right reserved. Licensed under the Apache-2.0 license
// See LICENSE in the project root for license information.

// ---------------------------------------------------------------------

import { html, unsafeCSS } from 'lit-element';
import 'focus-visible/dist/focus-visible.min.js';
import ComponentBase from './component-base';
import styleCss from "./style-drawer-css.js";
import styleCssFixed from "./style-drawer-fixed-css.js";

class AuroDrawer extends ComponentBase {

  // Adds styles for light DOM element; styles not defined in base class
  getDialogStyles() {
    return html`
      <style>${unsafeCSS(styleCss)}</style>
      <style>${unsafeCSS(styleCssFixed)}</style>
    `
  }
}

if (!customElements.get("auro-drawer")) {
  customElements.define("auro-drawer", AuroDrawer);
}