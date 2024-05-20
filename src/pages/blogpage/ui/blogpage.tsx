import s from "./blogpage.module.scss";

import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { ContentBlock } from "@shared/ui/content-block";
import { Post } from "@shared/types";
import { client } from "@shared/api/client";
import { CategorySelector } from "@features/category-selector";
import { PostBlock } from "@widgets/post-block";
import { PostList } from "@widgets/post-list";
import { queryBlogpage } from "../model/queries/queryBlogpage";
import { Category } from "@shared/consts";
import { Metadata } from "@shared/lib/metadata";

export const Blogpage = () => {
  const [activeCategory, setActiveCategory] = useState<Category>("All");
  const [posts, setPosts] = useState<Post[] | null>(null);
  const location = useLocation();

  useEffect(() => {
    async function getPosts() {
      const posts = await client.fetch(queryBlogpage(activeCategory));
      setPosts(posts);
    }

    getPosts();
  }, [activeCategory]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  if (!posts) return null;

  return (
    <main className={s.content}>
      <Metadata title="Blog" />
      <ContentBlock className={s.heading} bgColor="dark_08">
        <div className={s.headingTitle}>Последние Посты: Будь в Курсе</div>
        <div className={s.headingSubTitle}>
          Здесь публикуются последние новости о том-то, о чем-то, текст, текст,
          текст
        </div>
      </ContentBlock>
      <CategorySelector
        activeCategory={activeCategory}
        setActiveCategory={setActiveCategory}
      />
      {posts.length > 0 && <PostBlock {...posts[0]} />}
      {posts.length > 1 && <PostList posts={posts.slice(1)} />}
    </main>
  );
};
