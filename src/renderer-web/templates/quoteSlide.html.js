// src/renderer-web/templates/quoteSlide.html.js
export function renderQuoteSlide({ data }) {
    if (!Array.isArray(data)) return "";
  
    const lines = data.filter(d => d.name === "quoteLine");
    const author = data.find(d => d.name === "author")?.content ?? "";
  
    return `
      <div class="slide quote-slide">
        <blockquote>
          ${lines.map(l => `<p>${l.content}</p>`).join("")}
        </blockquote>
        ${author ? `<div class="author">${author}</div>` : ""}
      </div>
    `;
  }
  