export const titleSlide = {
    group(data) {
      return {
        title: data.find(d => d.name === "title")?.content ?? ""
      };
    }
  };
  