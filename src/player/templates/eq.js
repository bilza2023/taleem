
export const eq = {
    group(data) {
      const lines = [];
      let current = null;
  
      for (const item of data) {
        if (!item.type.startsWith("sp")) {
          current = {
            type: item.type,
            content: item.content,
            spItems: []
          };
          lines.push(current);
        } else if (current) {
          current.spItems.push({
            type: item.type,
            content: item.content
          });
        }
      }
  
      return { lines };
    }
  };
  