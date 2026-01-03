
// src/renderer-web/templates/bigNumber.html.js

export function renderBigNumber({ data }) {
    if (!Array.isArray(data)) return "";
  
    const number = data.find(d => d.name === "number")?.content ?? "";
    const label = data.find(d => d.name === "label")?.content ?? "";
  
    return `
      <div class="slide big-number-slide">
        <div class="big-number">${number}</div>
        ${label ? `<div class="big-number-label">${label}</div>` : ""}
      </div>
    `;
  }
  