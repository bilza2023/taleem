// src/renderer-web/templates/imageSlide.html.js

export function renderImageSlide({ data }) {
    if (!Array.isArray(data)) return "";
  
    const img = data.find(d => d.name === "image")?.content ?? "";
  
    return `
      <div class="slide image-slide">
        <img src="${img}" alt="" />
      </div>
    `;
  }
  