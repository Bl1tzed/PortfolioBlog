import { Category } from "@shared/consts/categories";

export type Post = {
  slug: string;
  title: string;
  subtitle: string;
  category: Category;
  published: string;
  author: string;
  mainImageUrl: string;
};
