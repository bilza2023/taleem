// src/renderer-web/templates/titleAndSubtitle.html.js

export function renderTitleAndSubtitle({ data }) {
    if (!Array.isArray(data)) return "";
  
    const title = data.find(d => d.name === "title")?.content ?? "";
    const subtitle = data.find(d => d.name === "subtitle")?.content ?? "";
  
    return `
      <div class="slide title-subtitle-slide">
        <h1 class="title">${title}</h1>
        <h2 class="subtitle">${subtitle}</h2>
      </div>
    `;
  }
  