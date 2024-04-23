import { ReactNode } from "react";
import { type Post as PostProps } from "@shared/types";
import { ContentBlock } from "@shared/ui/content-block";
import { Post } from "@entities/post";

import s from "./postList.module.scss";

export const PostList = ({
  posts,
  children,
}: {
  posts: PostProps[];
  children?: ReactNode;
}) => {
  return (
    <ContentBlock border className={s.postList} bgColor="dark_08">
      {children}
      <div className={s.postListItems}>
        {posts.map((item, index) => {
          return <Post key={item.title + index} {...item} />;
        })}
      </div>
    </ContentBlock>
  );
};
