export const bulletList = {
    group(data) {
      return {
        bullets: data
          .filter(d => d.name === "bullet")
          .map(d => d.content)
      };
    }
  };
  