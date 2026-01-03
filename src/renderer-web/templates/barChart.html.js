
// src/renderer-web/templates/barChart.html.js

export function renderBarChart({ data }) {
    if (!Array.isArray(data)) return "";
  
    const bars = data.filter(d => d.name === "bar");
    const max = Math.max(...bars.map(b => Number(b.value) || 0), 1);
  
    return `
      <div class="slide bar-chart-slide">
        <div class="bar-chart">
          ${bars
            .map(
              b => `
              <div class="bar-row">
                <div class="bar-label">${b.label}</div>
                <div class="bar-track">
                  <div
                    class="bar-fill"
                    style="width: ${(Number(b.value) / max) * 100}%"
                  ></div>
                </div>
                <div class="bar-value">${b.value}</div>
              </div>
            `
            )
            .join("")}
        </div>
      </div>
    `;
  }
  