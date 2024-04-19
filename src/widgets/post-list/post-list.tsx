import { type Post as PostProps } from "@shared/types";
import { ContentBlock } from "@shared/ui/content-block";
import { Post } from "@entities/post";

import s from "./post-list.module.scss";

export const PostList = ({ posts }: { posts: PostProps[] }) => {
  return (
    <ContentBlock className={s.postList}>
      {posts.map((item, index) => {
        return <Post key={item.title + index} {...item} />;
      })}
    </ContentBlock>
  );
};
