import { Category } from "@shared/consts/categories";

export type Post = {
  title: string;
  subtitle: string;
  category: Category;
  date: Date;
  author: string;
  image: string;
};
