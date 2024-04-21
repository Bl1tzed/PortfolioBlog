import { type Post as PostProps } from "@shared/types";
import { ContentBlock } from "@shared/ui/content-block";
import { Post } from "@entities/post";

import s from "./postList.module.scss";

export const PostList = ({ posts }: { posts: PostProps[] }) => {
  return (
    <ContentBlock className={s.postList} bgColor="dark_08">
      {posts.map((item, index) => {
        return <Post key={item.title + index} {...item} />;
      })}
    </ContentBlock>
  );
};
