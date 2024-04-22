import { type Post as PostProps } from "@shared/types";
import { Button } from "@shared/ui/button";
import { Link } from "react-router-dom";

import s from "./post.module.scss";

export const Post = ({ id, title, category, image }: PostProps) => {
  return (
    <div className={s.post}>
      <img className={s.postImage} src={image} alt="image" />
      <div className={s.postInfo}>
        <div className={s.postTitles}>
          <div className={s.postTitle}>{title}</div>
          <div className={s.postCategory}>{category}</div>
        </div>
      </div>
      <Link to={`/blog/${id}`}>
        <Button svg variant="secondary" size="medium" width="wide">
          Читать больше
        </Button>
      </Link>
    </div>
  );
};
