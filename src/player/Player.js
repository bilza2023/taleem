import { slideTemplates } from "./templates/index.js";

export class Player {
  constructor(deck) {
    this.deck = deck;
    this.slides = deck.deck;
  }

  // ===== OLD (kept for later timeline mode)
  getSlideAt(time) {
    return this.slides.find(
      s => time >= s.start && time <= s.end
    );
  }

  getFrame(time) {
    const slide = this.getSlideAt(time);
    if (!slide) return null;

    return this._buildFrame(slide, time);
  }

  // ===== NEW (for manual navigation)
  getFrameByIndex(index) {
    const slide = this.slides[index];
    if (!slide) return null;

    // use slide.start to reveal everything
    return this._buildFrame(slide, slide.end);
  }

  // ===== shared internal logic
  _buildFrame(slide, time) {
    const template = slideTemplates[slide.type];
    if (!template) {
      throw new Error(`Unsupported slide type: ${slide.type}`);
    }

    const visibleData = slide.data.filter(
      item => item.showAt === undefined || item.showAt <= time
    );

    return {
      type: slide.type,
      regions: template.group(visibleData),
      meta: {
        start: slide.start,
        end: slide.end
      }
    };
  }
}
