import s from "./postpage.module.scss";

import { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { InView } from "react-intersection-observer";
import {
  PortableText,
  PortableTextComponents,
  toPlainText,
} from "@portabletext/react";
import { ContentBlock } from "@shared/ui/content-block";
import { Button } from "@shared/ui/button";
import { client } from "@shared/api/client";
import { type DetailedPost } from "@shared/types";
import { blocksToText } from "@shared/lib/blockToText";
import { formatDate, textToAnchor } from "@shared/lib/utils";
import { PostList } from "@widgets/post-list";
import { queryPostpage } from "../model/queries/queryPostpage";
import clsx from "clsx";

const WORDS_PER_MINUTE = 183;

export const Postpage = () => {
  const [post, setPost] = useState<DetailedPost | null>(null);
  const [visibleSection, setVisibleSection] = useState<string | null>("");
  const { postSlug } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0);
    async function getPost(postSlug: string) {
      const post = await client.fetch(queryPostpage(postSlug));
      if (post.length === 0) navigate("/404");
      setPost(post);
    }

    if (postSlug) {
      getPost(postSlug);
    }
  }, [navigate, postSlug]);

  if (!post) return null;

  const wordCount = blocksToText(post.body)
    .split(/\s/)
    .filter((word) => word && word).length;
  const readingTime = Math.ceil(wordCount / WORDS_PER_MINUTE);

  const setInView = (inView: boolean, entry: IntersectionObserverEntry) => {
    if (inView) {
      setVisibleSection(entry.target.getAttribute("id"));
    }
  };

  const richTextComponents: PortableTextComponents = {
    types: {
      image: ({ value }: { value: { imageUrl: string; alt: string } }) => (
        <div className={s.imageWrapper}>
          <img className={s.image} src={value.imageUrl} alt={value.alt} />
        </div>
      ),
    },
    block: {
      normal: ({ children }) => <p className={s.normalText}>{children}</p>,
      h2: ({ children, value }) => (
        <InView
          onChange={setInView}
          threshold={0}
          rootMargin={"-15% 0px -85% 0px"}
          key={toPlainText(value)}
        >
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
    <main className={s.content}>
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
                <InView
                  onChange={setInView}
                  rootMargin={"-15% 0px -85% 0px"}
                  threshold={0}
                >
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
                <PortableText
                  value={post.body}
                  components={richTextComponents}
                />
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
                    <div className={s.infoItemText}>{post.categoryRu}</div>
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
    </main>
  );
};
