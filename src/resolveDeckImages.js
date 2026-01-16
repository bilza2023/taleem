/**
 * Resolve image item paths in a deck.
 * App-level utility. Mutates deck in place.
 */
export function resolveDeckImages(deck, IMG_BASE) {
  deck.deck.forEach(slide => {
    slide.data?.forEach(item => {
      if (item.name === "image" && typeof item.content === "string") {
        item.content = IMG_BASE + item.content.split("/").pop();
      }
    });
  });

  return deck;
}
