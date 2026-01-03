// src/renderer-web/templates/statistic.html.js
export function renderStatistic({ data }) {
    if (!Array.isArray(data)) return "";
  
    const number = data.find(d => d.name === "number")?.content ?? "";
    const label = data.find(d => d.name === "label")?.content ?? "";
  
    return `
      <div class="slide statistic-slide">
        <div class="stat-number">${number}</div>
        <div class="stat-label">${label}</div>
      </div>
    `;
  }
  