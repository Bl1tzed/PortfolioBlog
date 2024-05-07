import { ContentBlock } from "@shared/ui/content-block";
import s from "./homepage.module.scss";
import { Button, SvgButton } from "@shared/ui/button";
import { ReactSVG } from "react-svg";
import { motion } from "framer-motion";

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
          <motion.div
            className={s.imageCta}
            initial={{ scale: 0 }}
            animate={{ rotate: 360, scale: 1 }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ rotate: 180, scale: 0.9 }}
            transition={{
              type: "spring",
              stiffness: 260,
              damping: 20,
            }}
          >
            <ReactSVG src="/svg/logoIcon.svg" />
          </motion.div>
          <div>
            <div className={s.titleCta}>Explore 1000+ resources</div>
            <div className={s.subtitleCta}>
              Over 1,000 articles on emerging tech trends and breakthroughs.
            </div>
            <Button
              variant="secondary"
              size="small"
              svgSrc="/svg/arrow-up-right.svg"
              className={s.buttonCta}
            >
              Посетить блог
            </Button>
          </div>
        </ContentBlock>
      </ContentBlock>
      <ContentBlock>
        <div className={s.linkBlocks}>
          <div className={s.linkBlock}>
            <div className={s.linkBlockIcon}>
              <ReactSVG src="/svg/block1.svg" />
            </div>
            <div className={s.linkBlockMain}>
              <div className={s.linkBlockMainTitles}>
                <div className={s.linkBlockMainTitle}>Latest News Updates</div>
                <div className={s.linkBlockMainSubtitle}>Stay Current</div>
              </div>
              <div className={s.linkBlockMainButton}>
                <SvgButton />
              </div>
            </div>
            <div className={s.linkBlockSubtitle}>
              Over 1,000 articles published monthly
            </div>
          </div>
          <div className={s.linkBlock}>
            <div className={s.linkBlockIcon}>
              <ReactSVG src="/svg/block2.svg" />
            </div>
            <div className={s.linkBlockMain}>
              <div className={s.linkBlockMainTitles}>
                <div className={s.linkBlockMainTitle}>Latest News Updates</div>
                <div className={s.linkBlockMainSubtitle}>Stay Current</div>
              </div>
              <div className={s.linkBlockMainButton}>
                <SvgButton />
              </div>
            </div>
            <div className={s.linkBlockSubtitle}>
              Over 1,000 articles published monthly
            </div>
          </div>
          <div className={s.linkBlock}>
            <div className={s.linkBlockIcon}>
              <ReactSVG src="/svg/block3.svg" />
            </div>
            <div className={s.linkBlockMain}>
              <div className={s.linkBlockMainTitles}>
                <div className={s.linkBlockMainTitle}>Latest News Updates</div>
                <div className={s.linkBlockMainSubtitle}>Stay Current</div>
              </div>
              <div className={s.linkBlockMainButton}>
                <SvgButton />
              </div>
            </div>
            <div className={s.linkBlockSubtitle}>
              Over 1,000 articles published monthly
            </div>
          </div>
        </div>
      </ContentBlock>
    </main>
  );
};
