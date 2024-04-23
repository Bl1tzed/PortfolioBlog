import { ContentBlock } from "@shared/ui/content-block";
import { PostBlock } from "@widgets/post-block";
import { PostList } from "@widgets/post-list";
import { CategorySelector } from "@features/category-selector";
import { Post } from "@shared/types";
import { client } from "@shared/api/client";
import { useEffect, useState } from "react";

import s from "./blogpage.module.scss";

export const Blogpage = () => {
  const [activeCategory, setActiveCategory] = useState("All");
  const [posts, setPosts] = useState<Post[] | null>(null);

  useEffect(() => {
    window.scrollTo(0, 0);
    async function getPosts() {
      const posts = await client.fetch(
        `*[_type == 'post'
        && !(_id in path("drafts.**")) 
        ${
          activeCategory != "All"
            ? `&& category -> title == "${activeCategory}"`
            : ""
        }]
        {"slug": slug.current,"category": category -> title, title, subtitle, published, author, "mainImageUrl": mainImage.asset->url}
        `
      );

      setPosts(posts);
    }
    getPosts();
  }, [activeCategory]);

  if (!posts) return null;

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
      {posts.length > 0 && <PostBlock {...posts[0]} />}
      {posts.length > 1 && <PostList posts={posts.slice(1)} />}
    </div>
  );
};
