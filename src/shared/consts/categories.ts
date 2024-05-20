export const CATEGORIES = [
  { name: "All", ru: "Все" },
  { name: "Technology", ru: "Технология" },
  { name: "Politics", ru: "Политика" },
  { name: "Health", ru: "Здоровье" },
  { name: "Environment", ru: "Природа" },
  { name: "Sports", ru: "Спорт" },
] as const;

export type Category = (typeof CATEGORIES)[number]["name"];
