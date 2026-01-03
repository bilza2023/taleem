// src/renderer-web/templates/imageWithCaption.html.js

export function renderImageWithCaption({ data }) {
    if (!Array.isArray(data)) return "";
  
    const img = data.find(d => d.name === "image")?.content ?? "";
    const caption = data.find(d => d.name === "caption")?.content ?? "";
  
    return `
      <div class="slide image-with-caption-slide">
        <img src="${img}" alt="" />
        <div class="caption">${caption}</div>
      </div>
    `;
  }
  