import { Link, useNavigate, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { useInView, InView } from "react-intersection-observer";
import { client } from "@shared/api/client";
import { ContentBlock } from "@shared/ui/content-block";
import { type Post } from "@shared/types";
import {
  PortableText,
  PortableTextComponents,
  toPlainText,
} from "@portabletext/react";
import type { PortableTextBlock } from "@portabletext/types";
import { formatDate } from "@shared/lib/utils";
import { Button } from "@shared/ui/button";
import { PostList } from "@widgets/post-list";

import s from "./postpage.module.scss";
import clsx from "clsx";

type DetailedPost = Post & {
  body: PortableTextBlock[];
  headings: PortableTextBlock[];
  // samePosts: {
  //   title: string;
  //   category: string;
  //   mainImageUrl: string;
  //   slug: string;
  // }[];
  samePosts: Post[];
};

export const Postpage = () => {
  const { ref } = useInView({
    threshold: 0.2,
  });

  const [post, setPost] = useState<DetailedPost | null>(null);
  const [visibleSection, setVisibleSection] = useState<string | null>("");
  const { postSlug } = useParams();
  const navigate = useNavigate();

  const setInView = (inView: boolean, entry: IntersectionObserverEntry) => {
    if (inView) {
      setVisibleSection(entry.target.getAttribute("id"));
    }
  };

  const wordsPerMinute = 183;

  useEffect(() => {
    window.scrollTo(0, 0);
    async function getPosts() {
      const posts = await client.fetch(
        `*[_type == 'post' && !(_id in path("drafts.**")) && slug.current == "${postSlug}"]
        {body[] {
          ...,
          _type == 'image' => {
            _key, _type,
            "imageUrl": asset->url
          },
        },
        "headings": body[style == 'h2' || style == 'h3'],
        "samePosts": *[_type=="post" && references(^.category._ref ) && slug.current != "${postSlug}"]
        [0..2] | order(published desc)
        {title, "mainImageUrl": mainImage.asset->url, "category": category -> title, "slug": slug.current},
        "category": category -> title, title, subtitle, published, author, "mainImageUrl": mainImage.asset->url}
        `
      );

      if (posts.length === 0) navigate("/404");

      setPost(posts[0]);
    }
    getPosts();
  }, [navigate, postSlug]);

  if (!post) return null;

  const wordCount = blocksToText(post.body)
    .split(/\s/)
    .filter((word) => word && word).length;
  const readingTime = Math.ceil(wordCount / wordsPerMinute);

  const richTextComponents: PortableTextComponents = {
    types: {
      image: ({ value }) => (
        <div className={s.imageWrapper}>
          <img className={s.image} src={value.imageUrl} />
        </div>
      ),
    },
    block: {
      normal: ({ children }) => <p className={s.normalText}>{children}</p>,
      h2: ({ children, value }) => (
        <InView onChange={setInView} threshold={0.8} key={toPlainText(value)}>
          {({ ref }) => {
            return (
              <h3
                className={s.h2}
                id={textToAnchor(toPlainText(value))}
                ref={ref}
              >
                {children}
              </h3>
            );
          }}
        </InView>
      ),
      h3: ({ children, value }) => (
        <h4 className={s.h3} id={textToAnchor(toPlainText(value))}>
          {children}
        </h4>
      ),
      blockquote: ({ children }) => (
        <blockquote className={s.blockquote}>{children}</blockquote>
      ),
    },
    marks: {
      link: ({ children, value }) => (
        <a className={s.richTextLink} href={value.href}>
          {children}
        </a>
      ),
    },
    list: {
      bullet: ({ children }) => <ul className={s.bulletList}>{children}</ul>,
      number: ({ children }) => <ol className={s.numberList}>{children}</ol>,
    },
  };

  return (
    <div className={s.content}>
      <div className={s.post}>
        <ContentBlock border bgColor="dark_08" className={s.headingOuter}>
          <img
            className={s.headingImage}
            src={post.mainImageUrl}
            alt="Heading Image"
          />
          <h1 className={s.headingText}>{post.title}</h1>
        </ContentBlock>
        <ContentBlock>
          <div className={s.postContent}>
            <div className={s.postTextBlock}>
              <ContentBlock border borderRight className={s.introduction}>
                <InView onChange={setInView} threshold={0.8}>
                  {({ ref }) => {
                    return (
                      <div
                        id="introduction"
                        className={s.introductionTitle}
                        ref={ref}
                      >
                        Вступление
                      </div>
                    );
                  }}
                </InView>
                <div className={s.introductionSubTitle}>{post.subtitle}</div>
              </ContentBlock>
              <ContentBlock border borderRight className={s.postMainText}>
                <div ref={ref}>
                  <PortableText
                    value={post.body}
                    components={richTextComponents}
                  />
                </div>
              </ContentBlock>
            </div>
            <ContentBlock border borderLeft className={s.postInfo}>
              <div className={s.info}>
                <div className={s.infoBlock}>
                  <div className={s.infoItem}>
                    <div className={s.infoItemLabel}>Дата публикации</div>
                    <div className={s.infoItemText}>
                      {formatDate(post.published)}
                    </div>
                  </div>
                  <div className={s.infoItem}>
                    <div className={s.infoItemLabel}>Категория</div>
                    <div className={s.infoItemText}>{post.category}</div>
                  </div>
                </div>
                <div className={s.infoBlock}>
                  <div className={s.infoItem}>
                    <div className={s.infoItemLabel}>Время чтения</div>
                    <div className={s.infoItemText}>{readingTime} мин</div>
                  </div>
                  <div className={s.infoItem}>
                    <div className={s.infoItemLabel}>Имя автора</div>
                    <div className={s.infoItemText}>{post.author}</div>
                  </div>
                </div>
              </div>
              {!!post.headings.length && (
                <div className={s.contentTable}>
                  <div className={s.contentTableLabel}>Содержание</div>
                  <div className={s.contentTableItems}>
                    <ul className={s.contentTableItemsList}>
                      <li
                        key={"introduction"}
                        className={clsx(
                          s.contentTableItem,
                          visibleSection === "introduction" && s.visibleSection
                        )}
                      >
                        <a href={`#introduction`}>Вступление</a>
                      </li>
                      {post.headings.map((item) => (
                        <li
                          key={item._key}
                          className={clsx(
                            s.contentTableItem,
                            visibleSection ===
                              textToAnchor(item.children[0].text) &&
                              s.visibleSection
                          )}
                        >
                          <a href={`#${textToAnchor(item.children[0].text)}`}>
                            {item.children[0].text}
                          </a>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              )}
            </ContentBlock>
          </div>
        </ContentBlock>
        {!!post.samePosts.length && (
          <ContentBlock border>
            <PostList posts={post.samePosts}>
              <div className={s.samePostsHeading}>
                <div className={s.samePostsLabel}>Похожие посты</div>
                <Link to="/blog">
                  <Button
                    variant="secondary"
                    svgSrc="/svg/arrow-up-right.svg"
                    className={s.samePostsButton}
                  >
                    Все посты
                  </Button>
                </Link>
              </div>
            </PostList>
          </ContentBlock>
        )}
      </div>
    </div>
  );
};

function blocksToText(blocks: PortableTextBlock[], opts = {}) {
  const options = Object.assign({}, { nonTextBehavior: "remove" }, opts);
  return blocks
    .map((block) => {
      if (block._type !== "block" || !block.children) {
        return options.nonTextBehavior === "remove"
          ? ""
          : `[${block._type} block]`;
      }

      return block.children.map((child) => child.text).join("");
    })
    .join("\n\n");
}

function textToAnchor(text: string) {
  return text.toLowerCase().replaceAll(" ", "-");
}
