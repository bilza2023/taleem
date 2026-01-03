// src/renderer-web/templates/eq.html.js

export function renderEq(slide) {
  const lines = Array.isArray(slide.data) ? slide.data : [];

  return `
    <div class="slide eq-slide">
      <div class="eq-main">
        ${lines
          .filter(l => !l.name.startsWith("sp"))
          .map(l => {
            if (l.name === "heading") return `<h3>${l.content}</h3>`;
            if (l.name === "math") return `<div class="eq-math">${l.content}</div>`;
            if (l.name === "text") return `<div class="eq-text">${l.content}</div>`;
            return "";
          })
          .join("")}
      </div>

      <div class="eq-sidebar">
        ${lines
          .filter(l => l.name.startsWith("sp"))
          .map(l => {
            if (l.name === "spHeading") return `<h4>${l.content}</h4>`;
            if (l.name === "spText") return `<div>${l.content}</div>`;
            if (l.name === "spMath") return `<div class="eq-math">${l.content}</div>`;
            if (l.name === "spImage")
              return `<img src="${l.content}" />`;
            return "";
          })
          .join("")}
      </div>
    </div>
  `;
}
