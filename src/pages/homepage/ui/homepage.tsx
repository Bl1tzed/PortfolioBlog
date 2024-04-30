import { Button, SvgButton } from "@shared/ui/button";

import s from "./homepage.module.scss";

export const Homepage = () => {
  return (
    <main className={s.content}>
      <div className={s.text}>Homepage</div>
      <Button variant="primary" size="small">
        Contact Us
      </Button>
      <Button
        svgSrc="/svg/arrow-up-right.svg"
        variant="secondary"
        size="medium"
        width="wide"
      >
        Read More
      </Button>
      <Button variant="secondary" size="small">
        Read More
      </Button>
      <SvgButton />
    </main>
  );
};
