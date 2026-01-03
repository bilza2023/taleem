
export function renderTwoColumnText(regions) {
    const el = document.createElement("div");
    el.className = "slide two-col";
  
    el.innerHTML = `
      <h1>${regions.title}</h1>
      <div class="cols">
        <div class="col left">
          ${regions.left.map(t => `<p>${t}</p>`).join("")}
        </div>
        <div class="col right">
          ${regions.right.map(t => `<p>${t}</p>`).join("")}
        </div>
      </div>
    `;
    return el;
  }
  