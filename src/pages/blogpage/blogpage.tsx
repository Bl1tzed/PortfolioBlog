import { POSTS_LIST } from "@shared/consts/posts";
import { ContentBlock } from "@shared/ui/content-block";
import { PostBlock } from "@widgets/post-block";
import { PostList } from "@widgets/post-list";
import { CategorySelector } from "@features/category-selector";
import { useState } from "react";

import s from "./blogpage.module.scss";

export const Blogpage = () => {
  const [activeCategory, setActiveCategory] = useState("All");

  const sortedPosts = POSTS_LIST.filter(
    (item) => item.category === activeCategory || activeCategory === "All"
  ).sort((a, b) => b.date.valueOf() - a.date.valueOf());

  return (
    <div className={s.content}>
      <ContentBlock className={s.heading} bgColor="dark_08">
        <div className={s.headingTitle}>Последние Посты:</div>
        <div className={s.headingSecondary}>
          <div className={s.headingTitleUnder}>Будь в Курсе</div>
          <div className={s.headingSubTitle}>
            Здесь публикуются последние новости о том-то, о чем-то, текст,
            текст, текст
          </div>
        </div>
      </ContentBlock>
      <CategorySelector
        activeCategory={activeCategory}
        setActiveCategory={setActiveCategory}
      />
      {sortedPosts.length > 0 && <PostBlock {...sortedPosts[0]} />}
      {sortedPosts.length > 1 && <PostList posts={sortedPosts.slice(1)} />}
    </div>
  );
};
