export function renderTitleSlide(regions) {
    const el = document.createElement("div");
    el.className = "slide title-slide";
  
    el.innerHTML = `
      <h1>${regions.title}</h1>
    `;
  
    return el;
  }
  