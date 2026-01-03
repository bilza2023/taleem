export async function loadDeck(url) {
    const res = await fetch(url);
    if (!res.ok) {
      throw new Error("Failed to load deck");
    }
    return res.json();
  }
  