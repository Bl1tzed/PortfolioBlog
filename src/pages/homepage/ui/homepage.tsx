import s from "./homepage.module.scss";

import { motion } from "framer-motion";
import { ReactSVG } from "react-svg";
import { ContentBlock } from "@shared/ui/content-block";
import { Button, SvgButton } from "@shared/ui/button";
import { StickyCursor } from "@shared/ui/sticky-cursor";
import { Link } from "react-router-dom";

export const Homepage = () => {
  const blockAnimation = {
    notInView: {},
    inViewFirst: {
      transition: {
        staggerChildren: 0.3,
      },
    },
    inViewSecond: {
      transition: {
        staggerChildren: 0.3,
        delayChildren: 0.3,
      },
    },
  };

  const blockItemsAnimation = {
    notInView: { x: 100, opacity: 0 },
    inViewFirst: {
      opacity: 1,
      x: 0,
    },
    inViewSecond: {
      opacity: 1,
      x: 0,
    },
  };

  return (
    <main className={s.content}>
      <StickyCursor />
      <ContentBlock border className={s.heroBlock}>
        <div className={s.heroTitlesWrapper}>
          <motion.div
            className={s.heroTitles}
            initial={{ x: -100 }}
            animate={{ x: 0 }}
          >
            <div className={s.aboveTitle}>Я жду именно Ваше предложение</div>
            <div className={s.mainTitle}>
              Explore the Frontiers of Artificial Intelligence
            </div>
            <div className={s.subtitle}>
              Приветствую вас на сайте Blitzed. Более подробную информацию обо
              мне вы можете найти на странице "Портфолио", а способы связи со
              мной на странице "Контакты".
            </div>
          </motion.div>
        </div>
        <ContentBlock className={s.heroCta} outerClassName={s.heroCtaWrapper}>
          <motion.div
            className={s.heroCtaImage}
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
          <motion.div initial={{ y: -100 }} animate={{ y: 0 }}>
            <div className={s.heroCtaTitle}>Explore 1000+ resources</div>
            <div className={s.heroCtaSubtitle}>
              Over 1,000 articles on emerging tech trends and breakthroughs.
            </div>
            <Link to="/blog">
              <Button
                variant="secondary"
                size="small"
                svgSrc="/svg/arrow-up-right.svg"
                className={s.heroCtaButton}
              >
                Посетить блог
              </Button>
            </Link>
          </motion.div>
        </ContentBlock>
      </ContentBlock>
      <ContentBlock>
        <motion.div
          className={s.linkBlocks}
          initial={{ x: 100 }}
          animate={{ x: 0 }}
        >
          <div className={s.linkBlockWrapper}>
            <div className={s.linkBlock}>
              <div className={s.linkBlockIcon}>
                <ReactSVG src="/svg/block1.svg" />
              </div>
              <div className={s.linkBlockMain}>
                <div className={s.linkBlockMainTitles}>
                  <div className={s.linkBlockMainTitle}>
                    Latest News Updates
                  </div>
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
          <div className={s.linkBlockWrapper}>
            <div className={s.linkBlock}>
              <div className={s.linkBlockIcon}>
                <ReactSVG src="/svg/block2.svg" />
              </div>
              <div className={s.linkBlockMain}>
                <div className={s.linkBlockMainTitles}>
                  <div className={s.linkBlockMainTitle}>
                    Latest News Updates
                  </div>
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
          <div className={s.linkBlockWrapper}>
            <div className={s.linkBlock}>
              <div className={s.linkBlockIcon}>
                <ReactSVG src="/svg/block3.svg" />
              </div>
              <div className={s.linkBlockMain}>
                <div className={s.linkBlockMainTitles}>
                  <div className={s.linkBlockMainTitle}>
                    Latest News Updates
                  </div>
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
        </motion.div>
      </ContentBlock>
      <ContentBlock bgColor="dark_10" className={s.ctaBlock}>
        <motion.div className={s.ctaBlockHeader}>
          <motion.div
            className={s.ctaBlockHeaderIcon}
            variants={blockAnimation}
            initial="notInView"
            whileInView="inViewFirst"
            viewport={{ once: true }}
          >
            <motion.div variants={blockItemsAnimation}>
              <ReactSVG
                className={s.ctaBlockHeaderSvg}
                src="/svg/logoIcon.svg"
              />
            </motion.div>
            <motion.div
              className={s.ctaBlockAboveTitleMobile}
              variants={blockItemsAnimation}
            >
              Learn, Connect, and Innovate
            </motion.div>
          </motion.div>
          <motion.div
            className={s.ctaBlockTitles}
            variants={blockAnimation}
            initial="notInView"
            whileInView="inViewSecond"
            viewport={{ once: true }}
          >
            <motion.div
              className={s.ctaBlockAboveTitle}
              variants={blockItemsAnimation}
            >
              Learn, Connect, and Innovate
            </motion.div>
            <motion.div
              className={s.ctaBlockTitle}
              variants={blockItemsAnimation}
            >
              Be Part of the Future Tech Revolution
            </motion.div>
            <motion.div
              className={s.ctaBlockSubtitle}
              variants={blockItemsAnimation}
            >
              Immerse yourself in the world of future technology. Explore our
              comprehensive resources, connect with fellow tech enthusiasts, and
              drive innovation in the industry. Join a dynamic community of
              forward-thinkers.
            </motion.div>
          </motion.div>
        </motion.div>
      </ContentBlock>
    </main>
  );
};
