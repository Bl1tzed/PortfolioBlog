import { Button } from "@shared/ui/button";
import { SvgButton } from "@shared/ui/button";

import s from "./blogpage.module.scss";

export const Blogpage = () => {
  return (
    <div className={s.content}>
      <div className={s.text}>Text Текст посложнее где больше буков</div>
      <Button variant="primary" size="small" buttonType="default">
        Contact Us
      </Button>
      <Button variant="secondary" size="medium" svg={true} width="wide">
        Read More
      </Button>
      <Button variant="secondary" size="small">
        Read More
      </Button>
      <SvgButton />
    </div>
  );
};
