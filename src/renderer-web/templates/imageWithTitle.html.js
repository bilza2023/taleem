// src/renderer-web/templates/imageWithTitle.html.js

export function renderImageWithTitle({ data }) {
    if (!Array.isArray(data)) return "";
  
    const img = data.find(d => d.name === "image")?.content ?? "";
    const title = data.find(d => d.name === "title")?.content ?? "";
  
    return `
      <div class="slide image-with-title-slide">
        <img src="${img}" alt="" />
        <div class="overlay-title">${title}</div>
      </div>
    `;
  }
  