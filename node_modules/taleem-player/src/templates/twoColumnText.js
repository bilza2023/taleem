
export const twoColumnText = {
    group(data) {
      return {
        title: data.find(d => d.name === "title")?.content ?? "",
        left: data.filter(d => d.name === "left").map(d => d.content),
        right: data.filter(d => d.name === "right").map(d => d.content)
      };
    }
  };
  