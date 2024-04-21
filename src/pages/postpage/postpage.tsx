import { useNavigate, useParams } from "react-router-dom";
import { POSTS_LIST } from "@shared/consts";

import s from "./postpage.module.scss";
import { useEffect } from "react";

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
      <div className={s.text}>Post ID: {postId}</div>
      {currentPost && <div>{currentPost.author}</div>}
    </div>
  );
};
