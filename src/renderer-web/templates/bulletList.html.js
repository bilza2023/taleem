// src/renderer-web/templates/bulletList.html.js

export function renderBulletList({ data }) {
    if (!Array.isArray(data)) return "";
  
    const bullets = data.filter(d => d.name === "bullet");
  
    return `
      <div class="slide bullet-list-slide">
        <ul class="bullet-list">
          ${bullets
            .map(
              b => `
              <li class="bullet-item">
                ${b.content}
              </li>
            `
            )
            .join("")}
        </ul>
      </div>
    `;
  }
  