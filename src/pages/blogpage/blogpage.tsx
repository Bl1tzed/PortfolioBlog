import { POSTS_LIST } from "@shared/consts/posts";
import { ContentBlock } from "@shared/ui/content-block";
import { PostBlock } from "@widgets/post-block";
import { PostList } from "@widgets/post-list";
import clsx from "clsx";

import s from "./blogpage.module.scss";

export const Blogpage = () => {
  const sortedPosts = POSTS_LIST.sort(
    (a, b) => b.date.valueOf() - a.date.valueOf()
  );

  return (
    <div className={s.content}>
      <ContentBlock className={s.heading} bgColor="dark_08">
        <div className={clsx(s.headingTitle, "OpenSans600")}>
          Последние Посты:
        </div>
        <div className={s.headingSecondary}>
          <div className={clsx(s.headingTitleUnder, "OpenSans600")}>
            Будь в Курсе
          </div>
          <div className={clsx(s.headingSubTitle, "Inter400")}>
            Здесь публикуются последние новости о том-то, о чем-то, текст,
            текст, текст
          </div>
        </div>
      </ContentBlock>
      <PostBlock {...sortedPosts[0]} />
      <PostList posts={sortedPosts.slice(1)} />
    </div>
  );
};
