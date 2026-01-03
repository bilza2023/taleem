// src/renderer-web/templates/titleAndPara.html.js
export function renderTitleAndPara({ data }) {
    if (!Array.isArray(data)) return "";
  
    const title = data.find(d => d.name === "title")?.content ?? "";
    const para = data.find(d => d.name === "paragraph")?.content ?? "";
  
    return `
      <div class="slide title-para-slide">
        <h1>${title}</h1>
        <p>${para}</p>
      </div>
    `;
  }
  