import { PortableTextBlock } from "@portabletext/react";
import { Post } from "./postType";

export type DetailedPost = Post & {
  body: PortableTextBlock[];
  headings: PortableTextBlock[];
  samePosts: Post[];
};
