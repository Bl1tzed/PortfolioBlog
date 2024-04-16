import { ReactSVG } from "react-svg";
import style from "./LinkButton.module.scss";
import clsx from "clsx";

export const LinkButton = () => {
  return (
    <button className={clsx(style.linkButton)}>
      <ReactSVG src="svg/arrow-up-right.svg"></ReactSVG>
    </button>
  );
};
