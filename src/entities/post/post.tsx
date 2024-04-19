import { type Post as PostProps } from "@shared/types";
import { Button } from "@shared/ui/button";
import clsx from "clsx";

import s from "./post.module.scss";

export const Post = ({ title, category, image }: PostProps) => {
  return (
    <div className={s.post}>
      <img className={s.postImage} src={image} alt="image" />
      <div className={s.postInfo}>
        <div className={s.postTitles}>
          <div className={clsx(s.postTitle, "Inter600")}>{title}</div>
          <div className={s.postCategory}>{category}</div>
        </div>
      </div>
      <Button svg variant="secondary" size="medium" width="wide">
        Читать больше
      </Button>
    </div>
  );
};
