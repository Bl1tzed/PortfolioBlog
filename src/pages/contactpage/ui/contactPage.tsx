import { type AnimationSequence, useAnimate } from "framer-motion";
import { Button } from "@shared/ui/button";

import s from "./contactPage.module.scss";
import { ContentBlock } from "@shared/ui/content-block";
import { ReactSVG } from "react-svg";
import { Link } from "react-router-dom";

export const ContactPage = () => {
  const [scope, animate] = useAnimate();

  const sequence: AnimationSequence = [
    [
      "#popup",
      {
        opacity: 1,
        bottom: "20px",
      },
    ],
    ["#popup", { width: "150px" }],
    ["#text", { opacity: 1 }],
    ["#text", { opacity: 0 }, { delay: 2 }],
    ["#popup", { width: "50px" }],
    ["#popup", { opacity: 0, bottom: "-50px" }],
  ];

  const handleAnimate = (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    navigator.clipboard.writeText((e.target as HTMLButtonElement).innerText);
    animate(sequence);
  };

  return (
    <main ref={scope} className={s.content}>
      <div className={s.contacts}>
        <ContentBlock
          borderRight
          className={s.contactInfo}
          outerClassName={s.contactBlock}
        >
          <div className={s.contactHeader}>Контактные данные</div>
          <div className={s.contactButtons}>
            <Button
              variant="secondary"
              size="big"
              svgSrc="/svg/clipboard.svg"
              onClick={(e) => handleAnimate(e)}
              className={s.copyButton}
            >
              +7 965-981-3171
            </Button>
            <Button
              variant="secondary"
              size="big"
              svgSrc="/svg/clipboard.svg"
              onClick={(e) => handleAnimate(e)}
              className={s.copyButton}
            >
              blitzedrus@gmail.com
            </Button>
          </div>
        </ContentBlock>
        <ContentBlock
          className={s.contactLinks}
          outerClassName={s.contactBlock}
        >
          <div className={s.contactHeader}>Социальные сети</div>
          <div className={s.contactLinksBlock}>
            <Link to="https://t.me/BlitzedR">
              <div className={s.contactLink}>
                <ReactSVG src="/svg/telegram.svg" />
              </div>
            </Link>
            <Link to="https://vk.com/bl1tzed">
              <div className={s.contactLink}>
                <ReactSVG src="/svg/vk.svg" />
              </div>
            </Link>
          </div>
        </ContentBlock>
      </div>
      <div id="popup" className={s.popupMessage}>
        <div id="text" className={s.popupMessageText}>
          Скопировано
        </div>
      </div>
    </main>
  );
};
