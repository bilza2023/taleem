// src/renderer-web/templates/fillImage.html.js
export function renderFillImage({ data }) {
    if (!Array.isArray(data)) return "";
  
    const img = data.find(d => d.name === "image")?.content ?? "";
  
    return `
      <div class="slide fill-image-slide" style="background-image:url('${img}')"></div>
    `;
  }
  