// src/renderer-web/templates/contactSlide.html.js
export function renderContactSlide({ data }) {
    if (!Array.isArray(data)) return "";
  
    const get = name => data.find(d => d.name === name)?.content;
  
    return `
      <div class="slide contact-slide">
        <h2>${get("headline") ?? ""}</h2>
        ${get("email") ? `<div>Email: ${get("email")}</div>` : ""}
        ${get("phone") ? `<div>Phone: ${get("phone")}</div>` : ""}
      </div>
    `;
  }
  