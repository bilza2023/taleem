
export const imageSlide = {
    group(data) {
      const img = data.find(d => d.name === "image");
      return {
        image: img?.content ?? null
      };
    }
  };
  