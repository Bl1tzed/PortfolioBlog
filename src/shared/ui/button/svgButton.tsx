import { ReactSVG } from "react-svg";
import { Button } from "./button";
import clsx from "clsx";

import s from "./svgButton.module.scss";

export const SvgButton = () => {
  return (
    <Button className={clsx(s.svgButton)}>
      <ReactSVG src="svg/arrow-up-right.svg"></ReactSVG>
    </Button>
  );
};
