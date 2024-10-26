export const Storage = {
  addItem(key: string, value: string, shouldStringfy = true) {
    if (shouldStringfy) {
      localStorage.setItem(key, JSON.stringify(value));
    } else {
      localStorage.setItem(key, value);
    }
  },
  getItem(key: string, shouldParse = true) {
    const item = localStorage.getItem(key);
    if (!item) return null;
    return shouldParse ? JSON.parse(item) : item;
  },
  removeItem(key: string) {
    localStorage.removeItem(key);
  }
};


