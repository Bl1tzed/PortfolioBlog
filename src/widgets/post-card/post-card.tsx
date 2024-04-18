import { ContentBlock } from "@shared/ui/content-block";
import { POSTS_LIST } from "@shared/consts/posts";
import { Button } from "@shared/ui/button";
import { formatDate } from "@shared/lib/utils";
import clsx from "clsx";

import s from "./post-card.module.scss";

export const PostCard = () => {
  const sortedPost = POSTS_LIST.sort((a, b) => (a.date < b.date ? 1 : -1))[0];

  return (
    <ContentBlock className={s.post} border bgColor="dark_08">
      <img className={s.postImage} src={sortedPost.image} alt="image" />
      <div className={s.postInfo}>
        <div className={s.postTitles}>
          <div className={clsx(s.postTitle, "Inter600")}>
            {sortedPost.title}
          </div>
          <div className={clsx(s.postSubTitle, "Inter400")}>
            {sortedPost.subtitle}
          </div>
        </div>
        <div className={clsx(s.postSecondaryInfo, "Inter400")}>
          <div className={s.postSecondaryBlock}>
            <div className={s.postLabel}>Категория</div>
            <div className={s.postSecondaryText}>{sortedPost.category}</div>
          </div>

          <div className={s.postSecondaryBlock}>
            <div className={s.postLabel}>Дата публикации</div>
            <div className={s.postSecondaryText}>
              {formatDate(sortedPost.date)}
            </div>
          </div>
          <div className={s.postSecondaryBlock}>
            <div className={s.postLabel}>Автор</div>
            <div className={s.postSecondaryText}>{sortedPost.author}</div>
          </div>
        </div>
        <Button variant="secondary" size="small">
          Читать больше
        </Button>
      </div>
    </ContentBlock>
  );
};
