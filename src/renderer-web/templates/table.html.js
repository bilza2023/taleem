// src/renderer-web/templates/table.html.js
export function renderTable({ data }) {
    if (!Array.isArray(data)) return "";
  
    const headers = data.find(d => d.name === "headers")?.content ?? [];
    const rows = data.find(d => d.name === "rows")?.content ?? [];
  
    return `
      <div class="slide table-slide">
        <table>
          <thead>
            <tr>${headers.map(h => `<th>${h}</th>`).join("")}</tr>
          </thead>
          <tbody>
            ${rows
              .map(
                r => `<tr>${r.map(c => `<td>${c}</td>`).join("")}</tr>`
              )
              .join("")}
          </tbody>
        </table>
      </div>
    `;
  }
  