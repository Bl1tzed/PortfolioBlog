import { ContentBlock } from "@shared/ui/content-block";
import s from "./blogpage.module.scss";
import clsx from "clsx";
import { PostCard } from "@widgets/post-card";

export const Blogpage = () => {
  return (
    <div className={s.content}>
      <ContentBlock className={s.heading} bgColor="dark_08">
        <div className={clsx(s.headingTitle, "OpenSans600")}>
          Последние Посты:
        </div>
        <div className={s.headingSecondary}>
          <div className={clsx(s.headingTitleUnder, "OpenSans600")}>
            Будь в Курсе
          </div>
          <div className={clsx(s.headingSubTitle, "Inter400")}>
            Здесь публикуются последние новости о том-то, о чем-то, текст,
            текст, текст
          </div>
        </div>
      </ContentBlock>
      <PostCard></PostCard>
    </div>
  );
};
