import s from "./contactPage.module.scss";

import { type AnimationSequence, useAnimate } from "framer-motion";
import { Button } from "@shared/ui/button";
import { ContentBlock } from "@shared/ui/content-block";
import { SocialLinkBlock } from "@shared/ui/social-link-block";
import { StickyCursor } from "@shared/ui/sticky-cursor";

export const ContactPage = () => {
  const [scope, animate] = useAnimate();

  const popupMesssageSequence: AnimationSequence = [
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
    animate(popupMesssageSequence);
  };

  return (
    <main ref={scope} className={s.content}>
      <StickyCursor />
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
          <SocialLinkBlock variant={"button"} />
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
