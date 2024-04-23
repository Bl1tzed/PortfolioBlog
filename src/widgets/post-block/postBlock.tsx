import { ContentBlock } from "@shared/ui/content-block";
import { Button } from "@shared/ui/button";
import { formatDate } from "@shared/lib/utils";
import { type Post } from "@shared/types";
import { Link } from "react-router-dom";

import s from "./postBlock.module.scss";

export const PostBlock = ({
  slug,
  title,
  subtitle,
  category,
  published,
  author,
  mainImageUrl,
}: Post) => {
  return (
    <ContentBlock className={s.post} bgColor="dark_08">
      <img className={s.postImage} src={mainImageUrl} alt="image" />
      <div className={s.postInfo}>
        <div className={s.postTitles}>
          <div className={s.postTitle}>{title}</div>
          <div className={s.postSubTitle}>{subtitle}</div>
        </div>
        <div className={s.postSecondaryInfo}>
          <div className={s.postSecondaryBlock}>
            <div className={s.postLabel}>Категория</div>
            <div className={s.postSecondaryText}>{category}</div>
          </div>
          <div className={s.postSecondaryBlock}>
            <div className={s.postLabel}>Дата публикации</div>
            <div className={s.postSecondaryText}>{formatDate(published)}</div>
          </div>
          <div className={s.postSecondaryBlock}>
            <div className={s.postLabel}>Автор</div>
            <div className={s.postSecondaryText}>{author}</div>
          </div>
        </div>
        <Link to={`/blog/${slug}`}>
          <Button variant="secondary" size="medium">
            Читать больше
          </Button>
        </Link>
      </div>
    </ContentBlock>
  );
};
