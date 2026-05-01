export const storage = {
  get<T>(key: string): T | undefined {
    const data = localStorage.getItem(key);
    return data ? JSON.parse(data) : undefined;
  },

  set(key: string, value: unknown): void {
    localStorage.setItem(key, JSON.stringify(value));
  },
};
