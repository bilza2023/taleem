/**
 * Resolve image references in a deck to the demo app's local image directory.
 *
 * This is a demo / app-level utility.
 * It does NOT belong in taleem-core or taleem-player.
 */

export function resolveDeckImages(deck, { basePath = "" } = {}) {
    const resolveImage = name =>
      `${basePath}/public/media/images/${name}`;
  
    // slide-level images
    deck.deck.forEach(slide => {
      slide.data?.forEach(item => {
        if (typeof item.content === "string" && item.content.endsWith(".webp")) {
          item.content = resolveImage(item.content.split("/").pop());
        }
      });
    });
  
    // background image
    if (deck.background?.backgroundImage) {
      deck.background.backgroundImage =
        resolveImage(deck.background.backgroundImage.split("/").pop());
    }
  
    return deck;
  }
  