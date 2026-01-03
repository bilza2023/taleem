// src/renderer-web/templates/quoteWithImage.html.js
export function renderQuoteWithImage({ data }) {
    if (!Array.isArray(data)) return "";
  
    const lines = data.filter(d => d.name === "quoteLine");
    const author = data.find(d => d.name === "author")?.content ?? "";
    const img = data.find(d => d.name === "image")?.content ?? "";
  
    return `
      <div class="slide quote-with-image-slide">
        <img src="${img}" alt="" />
        <div class="quote">
          ${lines.map(l => `<p>${l.content}</p>`).join("")}
          ${author ? `<div class="author">${author}</div>` : ""}
        </div>
      </div>
    `;
  }
  