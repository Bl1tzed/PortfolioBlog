// export const CATEGORIES: string[] = [
//   "All",
//   "Technology",
//   "Politics",
//   "Health",
//   "Environment",
//   "Sports",
// ];

// export type Category = (typeof CATEGORIES)[number];

export const CATEGORIES: Category[] = [
  { name: "All", ru: "Все" },
  { name: "Technology", ru: "Технология" },
  { name: "Politics", ru: "Политика" },
  { name: "Health", ru: "Здоровье" },
  { name: "Environment", ru: "Природа" },
  { name: "Sports", ru: "Спорт" },
];

export type Category = {
  name: string;
  ru: string;
};
