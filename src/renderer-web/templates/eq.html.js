
export function renderEq({ lines }) {
    const el = document.createElement("div");
    el.className = "slide eq";
  
    for (const line of lines) {
      const lineEl = document.createElement("div");
      lineEl.className = "eq-line";
  
      lineEl.innerHTML = `<div class="main">${line.content}</div>`;
  
      if (line.spItems.length) {
        const side = document.createElement("div");
        side.className = "sidebar";
  
        side.innerHTML = line.spItems
          .map(sp => `<div class="sp">${sp.content}</div>`)
          .join("");
  
        lineEl.appendChild(side);
      }
  
      el.appendChild(lineEl);
    }
  
    return el;
  }
  