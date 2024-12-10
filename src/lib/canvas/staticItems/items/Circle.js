import  uuid  from '../../../uuid';

// add type in data
// remove item in draw
// change class name
export default class Circle {
  
  static data() { 
    return {
      uuid: uuid(),
      type: 'circle',
      x: 100,
      y: 150,
      radius: 100,
      startAngle: 0,
      endAngle: 360,
      fill: false,
      lineWidth: 1,
      color: "black",
      globalAlpha: 1
    };
  }

  
  static draw(ctx, itemExtra) {
    ctx.save();
  
    // Extract values
    const x = itemExtra.x;
    const y = itemExtra.y;
    const radius = itemExtra.radius;
    const color = itemExtra.color || 'black';
    const fill = itemExtra.fill || false;
    const startAngle = (itemExtra.startAngle) || 0 * (Math.PI / 180);
    const endAngle = (itemExtra.endAngle || 360) * (Math.PI / 180);
    const dash = itemExtra.dash || 0;
    const gap = itemExtra.gap || 0;
    const lineWidth = itemExtra.lineWidth || 1;
    const globalAlpha = itemExtra.globalAlpha || 1;

    // Set properties
    ctx.lineWidth = lineWidth;
    ctx.globalAlpha = globalAlpha;
    ctx.beginPath();
    ctx.arc(x, y, radius, startAngle, endAngle);

    if (fill) {
        ctx.fillStyle = color;
        ctx.fill();
    } else {
        ctx.strokeStyle = color;
        
        // Set line dash pattern
        if (dash === 0 && gap === 0) {
            ctx.setLineDash([]);
        } else {
            ctx.setLineDash([dash, gap]);
        }

        ctx.stroke();
    }

    // Restore the context state
    ctx.restore();
  }
}