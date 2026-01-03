// src/renderer-web/templates/donutChart.html.js
export function renderDonutChart({ data }) {
    if (!Array.isArray(data)) return "";
  
    const segments = [];
    for (let i = 0; i < data.length; i += 3) {
      segments.push({
        percent: data[i]?.content,
        label: data[i + 1]?.content,
        color: data[i + 2]?.content
      });
    }
  
    return `
      <div class="slide donut-chart-slide">
        <div class="donut">
          ${segments
            .map(
              s => `
            <div class="donut-segment" style="--value:${s.percent};--color:${s.color}">
              <span>${s.label} (${s.percent}%)</span>
            </div>
          `
            )
            .join("")}
        </div>
      </div>
    `;
  }
  