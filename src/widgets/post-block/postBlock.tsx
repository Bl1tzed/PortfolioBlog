import { ContentBlock } from "@shared/ui/content-block";

import { Button } from "@shared/ui/button";
import { formatDate } from "@shared/lib/utils";
import { type Post } from "@shared/types";
import clsx from "clsx";

import s from "./postBlock.module.scss";

export const PostBlock = ({
  title,
  subtitle,
  category,
  date,
  author,
  image,
}: Post) => {
  return (
    <ContentBlock className={s.post} border bgColor="dark_08">
      <img className={s.postImage} src={image} alt="image" />
      <div className={s.postInfo}>
        <div className={s.postTitles}>
          <div className={clsx(s.postTitle, "Inter600")}>{title}</div>
          <div className={clsx(s.postSubTitle, "Inter400")}>{subtitle}</div>
        </div>
        <div className={clsx(s.postSecondaryInfo, "Inter400")}>
          <div className={s.postSecondaryBlock}>
            <div className={s.postLabel}>Категория</div>
            <div className={s.postSecondaryText}>{category}</div>
          </div>
          <div className={s.postSecondaryBlock}>
            <div className={s.postLabel}>Дата публикации</div>
            <div className={s.postSecondaryText}>{formatDate(date)}</div>
          </div>
          <div className={s.postSecondaryBlock}>
            <div className={s.postLabel}>Автор</div>
            <div className={s.postSecondaryText}>{author}</div>
          </div>
        </div>
        <Button variant="secondary" size="medium">
          Читать больше
        </Button>
      </div>
    </ContentBlock>
  );
};
