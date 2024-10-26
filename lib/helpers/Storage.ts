export const Storage = {
  addItem(key: string, value: string, shouldStringfy = true) {
    if (typeof window !== undefined) {
      if (shouldStringfy) {
        localStorage.setItem(key, JSON.stringify(value));
      } else {
        localStorage.setItem(key, value);
      }
    }
  },
  getItem(key: string, shouldParse = true) {
    if (typeof window !== undefined) {
      const item = localStorage.getItem(key);
      if (!item) return null;
      return shouldParse ? JSON.parse(item) : item;
    }
  },
  removeItem(key: string) {
    if (typeof window !== undefined) {
      localStorage.removeItem(key);
    }
  }
};
