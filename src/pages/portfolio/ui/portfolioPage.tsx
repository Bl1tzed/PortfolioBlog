import { ContentBlock } from "@shared/ui/content-block";
import s from "./portfolioPage.module.scss";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { DURATION_SHORT, PROJECT_CARDS } from "@shared/consts";
import { ProjectCard } from "@entities/project-card";
import { Metadata } from "@shared/lib/metadata";
import { useEffect, useState } from "react";
import { client } from "@shared/api/client";
import { MetadataProps } from "@shared/types";
import { queryPortfolioPage } from "../queries/queryPortfolioPage";
import { AnimatedLayout } from "@shared/ui/animated-layout";

type DataProps = {
  metadata: MetadataProps;
};

export const PortfolioPage = () => {
  const ref = useRef(null);
  const [data, setData] = useState<DataProps | null>(null);

  useEffect(() => {
    async function getData() {
      const posts = await client.fetch(queryPortfolioPage("/portfolio"));
      setData(posts);
    }

    getData();
  }, []);

  const { scrollYProgress } = useScroll({
    target: ref,
  });

  const parameter =
    (PROJECT_CARDS.length * 60 + (PROJECT_CARDS.length - 1) * 20) / 100;

  const x = useTransform(
    scrollYProgress,
    [0, 1],
    [`${20 / parameter}%`, `-${100 - 80 / parameter}%`]
  );

  return (
    <AnimatedLayout>
      <main className={s.content}>
        <Metadata
          title="Portfolio"
          description={data ? data.metadata.description : ""}
        />
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
    </AnimatedLayout>
  );
};
