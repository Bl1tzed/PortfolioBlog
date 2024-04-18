import { Button, SvgButton } from "@shared/ui/button";

import s from "./homepage.module.scss";

export const Homepage = () => {
  return (
    <div className={s.content}>
      <div className={s.text}>Homepage</div>
      <Button variant="primary" size="small" buttonType="default">
        Contact Us
      </Button>
      <Button svg variant="secondary" size="medium" width="wide">
        Read More
      </Button>
      <Button variant="secondary" size="small">
        Read More
      </Button>
      <SvgButton />
    </div>
  );
};
