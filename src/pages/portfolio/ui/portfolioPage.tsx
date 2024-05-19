import { ContentBlock } from "@shared/ui/content-block";
import s from "./portfolioPage.module.scss";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { DURATION_SHORT, PROJECT_CARDS } from "@shared/consts";
import { ProjectCard } from "@entities/project-card";

export const PortfolioPage = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
  });

  const parameter =
    (PROJECT_CARDS.length * 50 + (PROJECT_CARDS.length - 1) * 20) / 100;

  const x = useTransform(
    scrollYProgress,
    [0, 1],
    [`${20 / parameter}%`, `-${100 - 80 / parameter}%`]
  );

  return (
    <main className={s.content}>
      {/* <div className={s.block}></div> */}
      <ContentBlock border>
        <motion.section
          ref={ref}
          className={s.projects}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: DURATION_SHORT * 2 }}
        >
          <div className={s.projectsBlock}>
            <motion.div style={{ x }} className={s.projectCards}>
              {PROJECT_CARDS.map((card, index) => (
                <ProjectCard key={index} card={card} index={index + 1} />
              ))}
            </motion.div>
          </div>
        </motion.section>
      </ContentBlock>
    </main>
  );
};
