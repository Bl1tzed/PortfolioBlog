import { ContentBlock } from "@shared/ui/content-block";
import s from "./homepage.module.scss";
import { Button } from "@shared/ui/button";

export const Homepage = () => {
  return (
    <main className={s.content}>
      <ContentBlock border className={s.heroBlock}>
        <ContentBlock borderRight className={s.heroTitles}>
          <div className={s.aboveTitle}>Я жду именно Ваше предложение</div>
          <div className={s.mainTitle}>
            Explore the Frontiers of Artificial Intelligence
          </div>
          <div className={s.subtitle}>
            Приветствую вас на сайте Blitzed. Более подробную информацию обо мне
            вы можете найти на странице "Портфолио", а способы связи со мной на
            странице "Контакты".
          </div>
        </ContentBlock>
        <ContentBlock className={s.heroCta} outerClassName={s.heroCtaWrapper}>
          {/* <img src="abstractDesign2.png" alt="" className={s.imageCta} /> */}
          <div className={s.titleCta}>Explore 1000+ resources</div>
          <div className={s.subtitleCta}>
            Over 1,000 articles on emerging tech trends and breakthroughs.
          </div>
          <Button
            variant="secondary"
            size="small"
            svgSrc="/svg/arrow-up-right.svg"
          >
            Посетить блог
          </Button>
        </ContentBlock>
      </ContentBlock>
    </main>
  );
};
