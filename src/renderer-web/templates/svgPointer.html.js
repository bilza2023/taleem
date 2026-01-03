// src/renderer-web/templates/svgPointer.html.js

export function renderSvgPointer({ data }) {
    if (!Array.isArray(data)) return "";
  
    const image = data.find(d => d.type === "image")?.content ?? "";
    const items = data.filter(d => d.type !== "image");
  
    return `
      <div class="slide svg-pointer-slide">
        <div class="svg-pointer-stage">
          <img src="${image}" class="svg-pointer-base" />
  
          ${items
            .map(item => {
              switch (item.type) {
                case "circle":
                  return `<div class="ptr-circle" style="left:${item.x}px;top:${item.y}px;"></div>`;
                case "dot":
                  return `<div class="ptr-dot" style="left:${item.x}px;top:${item.y}px;"></div>`;
                case "arrow":
                  return `<div class="ptr-arrow" style="left:${item.x}px;top:${item.y}px;"></div>`;
                case "blink":
                  return `<div class="ptr-blink" data-target="${item.targetId}"></div>`;
                case "window":
                  return `<div class="ptr-window" style="left:${item.x}px;top:${item.y}px;width:${item.width}px;height:${item.height}px;"></div>`;
                default:
                  return "";
              }
            })
            .join("")}
        </div>
      </div>
    `;
  }
  