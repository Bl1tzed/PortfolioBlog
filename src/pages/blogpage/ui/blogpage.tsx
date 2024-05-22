import s from "./blogpage.module.scss";

import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { ContentBlock } from "@shared/ui/content-block";
import { Metadata } from "@shared/lib/metadata";
import { Category } from "@shared/consts";
import { MetadataProps, Post } from "@shared/types";
import { client } from "@shared/api/client";
import { CategorySelector } from "@features/category-selector";
import { PostBlock } from "@widgets/post-block";
import { PostList } from "@widgets/post-list";
import { queryBlogpage } from "../model/queries/queryBlogpage";
import { AnimatedLayout } from "@shared/ui/animated-layout";

type DataProps = {
  metadata: MetadataProps;
  posts: Post[];
};

export const Blogpage = () => {
  const [activeCategory, setActiveCategory] = useState<Category>("All");
  const [data, setData] = useState<DataProps | null>(null);
  const location = useLocation();

  useEffect(() => {
    async function getData() {
      const posts = await client.fetch(queryBlogpage(activeCategory, "/blog"));
      setData(posts);
    }

    getData();
  }, [activeCategory]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  if (!data) return null;

  const posts = data.posts;

  return (
    <AnimatedLayout>
      <main className={s.content}>
        <Metadata title="Blog" description={data.metadata.description} />
        <ContentBlock className={s.heading} bgColor="dark_08">
          <div className={s.headingTitle}>Последние Посты: Будь в Курсе</div>
          <div className={s.headingSubTitle}>
            Здесь публикуются последние новости о том-то, о чем-то, текст,
            текст, текст
          </div>
        </ContentBlock>
        <CategorySelector
          activeCategory={activeCategory}
          setActiveCategory={setActiveCategory}
        />
        {posts.length > 0 && <PostBlock {...posts[0]} />}
        {posts.length > 1 && <PostList posts={posts.slice(1)} />}
      </main>
    </AnimatedLayout>
  );
};
