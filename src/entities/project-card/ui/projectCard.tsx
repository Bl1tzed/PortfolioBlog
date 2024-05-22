import { DURATION_SHORT, ProjectCardProps } from "@shared/consts";
import s from "./projectCard.module.scss";
import { motion } from "framer-motion";
import { formatIndex } from "@shared/lib/utils";
import { ReactSVG } from "react-svg";
import { Link } from "react-router-dom";
import { TECHNOLOGIES } from "@shared/consts";
import clsx from "clsx";

export const ProjectCard = ({
  card,
  index,
}: {
  card: ProjectCardProps;
  index: number;
}) => {
  const cardAnimation = {
    notInView: {},
    inView: {
      transition: {
        dealyChildren: DURATION_SHORT,
        staggerChildren: DURATION_SHORT,
      },
    },
  };

  const cardItemsAnimation = {
    notInView: { opacity: 0 },
    inView: { opacity: 1 },
  };

  const svgHover = {
    noAction: {},
    tap: {},
  };

  const svgText = {
    noAction: { width: 0, opacity: 0, visibility: "hidden" },
    tap: { width: "fit-content", opacity: 1, visibility: "visible" },
  } as const;

  return (
    <motion.div
      key={index}
      className={s.card}
      variants={cardAnimation}
      initial="notInView"
      whileInView="inView"
      viewport={{ once: true }}
    >
      <motion.div variants={cardItemsAnimation} className={s.cardHeader}>
        <div className={s.index}>{"#" + formatIndex(index, 3)}</div>
        <div className={s.name}>{card.name}</div>
      </motion.div>
      <motion.div variants={cardItemsAnimation} className={s.cardTechs}>
        {card.techs.map((cardTech, index) => {
          const currentTech = TECHNOLOGIES.find(
            (tech) => tech.name === cardTech
          );
          if (!currentTech) return null;
          return (
            <motion.div
              initial="noAction"
              whileTap="tap"
              variants={svgHover}
              className={s.cardTech}
              key={currentTech.name + index}
            >
              <ReactSVG className={s.techSvg} src={currentTech.imageSrc} />
              <motion.div className={s.techName} variants={svgText}>
                {currentTech.name}
              </motion.div>
            </motion.div>
          );
        })}
      </motion.div>
      <motion.div variants={cardItemsAnimation} className={s.cardImageWrapper}>
        <img src={card.imageSrc} alt="Project Image" className={s.cardImage} />
      </motion.div>
      <motion.div variants={cardItemsAnimation} className={s.cardLinks}>
        <Link
          to={card.gitLink}
          className={clsx(!card.gitLink && s.disabledLink, s.link)}
        >
          GitHub
          <ReactSVG className={s.linkSvg} src="svg/arrow-up-right.svg" />
        </Link>
        <Link
          to={card.demoLink}
          className={clsx(!card.demoLink && s.disabledLink, s.link)}
        >
          Демо
          <ReactSVG className={s.linkSvg} src="svg/arrow-up-right.svg" />
        </Link>
      </motion.div>
    </motion.div>
  );
};
