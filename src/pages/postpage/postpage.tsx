import { useNavigate, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { client } from "@shared/api/client";
import { ContentBlock } from "@shared/ui/content-block";
import { type Post } from "@shared/types";
import { PortableText, PortableTextComponents } from "@portabletext/react";
import type { PortableTextBlock } from "@portabletext/types";

import s from "./postpage.module.scss";
import { formatDate } from "@shared/lib/utils";

type DetailedPost = Post & {
  body: PortableTextBlock[];
};

export const Postpage = () => {
  const [post, setPost] = useState<DetailedPost | null>(null);
  const { postSlug } = useParams();
  const navigate = useNavigate();

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
          }
        }, "category": category -> title, title, subtitle, published, author, "mainImageUrl": mainImage.asset->url}
        `
      );

      if (posts.length === 0) navigate("/404");

      setPost(posts[0]);
    }
    getPosts();
  }, [navigate, postSlug]);

  if (!post) return null;

  const wordCount = blocksToText(post.body)
    .split(/\w+/g)
    .filter(Boolean).length;
  const readingTime = Math.ceil(wordCount / wordsPerMinute);
  // const myPortableTextComponents = {
  //   types: {
  //     image: ({ value }) => <img src={value.imageUrl} />,
  //     callToAction: ({ value, isInline }) =>
  //       isInline ? (
  //         <a href={value.url}>{value.text}</a>
  //       ) : (
  //         <div className="callToAction">{value.text}</div>
  //       ),
  //   },

  // marks: {
  //     em: ({ children }) => (
  //       <em className="text-gray-600 font-semibold">{children}</em>
  //     ),
  //     link: ({ children, value }) => {
  //       const rel = !value.href.startsWith("/")
  //         ? "noreferrer noopener"
  //         : undefined;
  //       return (
  //         <a href={value.href} rel={rel}>
  //           {children}
  //         </a>
  //       );
  //     },
  //   },
  // };

  const richTextComponents: PortableTextComponents = {
    types: {
      image: ({ value }) => <img src={value.imageUrl} />,
    },
    block: {
      normal: ({ children }) => <p className={s.normalText}>{children}</p>,
    },
  };

  return (
    <div className={s.content}>
      <div className={s.post}>
        <ContentBlock border bgColor="dark_10" className={s.headingOuter}>
          <div className={s.headingInner}>
            <img
              className={s.headingImage}
              src={post.mainImageUrl}
              alt="Heading Image"
            />
            <h1 className={s.headingText}>{post.title}</h1>
          </div>
        </ContentBlock>
        <div className={s.postContent}>
          <div className={s.postTextBlock}>
            <ContentBlock border borderRight className={s.introduction}>
              <div className={s.introductionTitle}>Introduction</div>
              <div className={s.introductionSubTitle}>{post.subtitle}</div>
            </ContentBlock>
            <ContentBlock border borderRight className={s.postMainText}>
              <PortableText value={post.body} components={richTextComponents} />
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
            <div className={s.contentTable}>
              <div className={s.contentTableLabel}></div>
            </div>
          </ContentBlock>
        </div>
      </div>
    </div>
  );
};

const defaults = { nonTextBehavior: "remove" };

function blocksToText(blocks: PortableTextBlock[], opts = {}) {
  const options = Object.assign({}, defaults, opts);
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
