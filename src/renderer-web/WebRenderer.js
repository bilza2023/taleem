
import { renderTemplates } from "./templates/index.js";

export class WebRenderer {
  constructor(rootEl) {
    this.root = rootEl;
  }

  render(frame) {
    if (!frame) {
      this.root.innerHTML = "";
      return;
    }

    const renderFn = renderTemplates[frame.type];
    if (!renderFn) {
      throw new Error(`No renderer for slide type: ${frame.type}`);
    }

    this.root.innerHTML = "";
    this.root.appendChild(renderFn(frame.regions));
  }
}
