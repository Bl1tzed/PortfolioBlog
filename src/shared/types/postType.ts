import { Category } from "@shared/consts/categories";

export type Post = {
  id: number;
  title: string;
  subtitle: string;
  category: Category;
  date: Date;
  author: string;
  image: string;
};
