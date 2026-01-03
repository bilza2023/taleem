// src/renderer-web/templates/imageLeftBulletsRight.html.js

export function renderImageLeftBulletsRight({ data }) {
    if (!Array.isArray(data)) return "";
  
    const img = data.find(d => d.name === "image")?.content ?? "";
    const bullets = data.filter(d => d.name === "bullet");
  
    return `
      <div class="slide image-left-bullets-right-slide">
        <div class="left">
          <img src="${img}" alt="" />
        </div>
        <div class="right">
          <ul>
            ${bullets.map(b => `<li>${b.content}</li>`).join("")}
          </ul>
        </div>
      </div>
    `;
  }
  