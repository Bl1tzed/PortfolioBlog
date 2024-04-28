import { PortableTextBlock } from "@portabletext/react";
import { Post } from "@shared/types";

export type DetailedPost = Post & {
  body: PortableTextBlock[];
  headings: PortableTextBlock[];
  samePosts: Post[];
};
