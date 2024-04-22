import { POSTS_LIST } from "@shared/consts";
import { useNavigate, useParams } from "react-router-dom";
import { useEffect } from "react";

import s from "./postpage.module.scss";
import { ContentBlock } from "@shared/ui/content-block";

export const Postpage = () => {
  const { postId } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0);
    isNaN(Number(postId)) && navigate("/blog");
  }, [navigate, postId]);

  const postIdNumber = Number(postId);

  const currentPost = POSTS_LIST.find((post) => post.id === postIdNumber);

  return (
    <div className={s.content}>
      {currentPost && (
        <div className={s.post}>
          <ContentBlock border bgColor="dark_10" className={s.headingOuter}>
            <div className={s.headingInner}>
              <div className={s.headingText}>{currentPost.title}</div>
            </div>
          </ContentBlock>
          <div>{currentPost.author}</div>
        </div>
      )}
      <div className={s.text}>Post ID: {postId}</div>
    </div>
  );
};
