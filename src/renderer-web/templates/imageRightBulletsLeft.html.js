// src/renderer-web/templates/imageRightBulletsLeft.html.js

export function renderImageRightBulletsLeft({ data }) {
    if (!Array.isArray(data)) return "";
  
    const img = data.find(d => d.name === "image")?.content ?? "";
    const bullets = data.filter(d => d.name === "bullet");
  
    return `
      <div class="slide image-right-bullets-left-slide">
        <div class="left">
          <ul>
            ${bullets.map(b => `<li>${b.content}</li>`).join("")}
          </ul>
        </div>
        <div class="right">
          <img src="${img}" alt="" />
        </div>
      </div>
    `;
  }
  