import s from "./contactPage.module.scss";

import { type AnimationSequence, useAnimate } from "framer-motion";
import { Button } from "@shared/ui/button";
import { ContentBlock } from "@shared/ui/content-block";
import { SocialLinkBlock } from "@shared/ui/social-link-block";
import { Metadata } from "@shared/lib/metadata";
import { MetadataProps } from "@shared/types";
import { useEffect, useState } from "react";
import { client } from "@shared/api/client";
import { queryContactPage } from "../queries/queryContactPage";
import { AnimatedLayout } from "@shared/ui/animated-layout";

type DataProps = {
  metadata: MetadataProps;
};

export const ContactPage = () => {
  const [scope, animate] = useAnimate();
  const [data, setData] = useState<DataProps | null>(null);

  useEffect(() => {
    async function getData() {
      const posts = await client.fetch(queryContactPage("/contact"));
      setData(posts);
    }

    getData();
  }, []);

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
    <AnimatedLayout>
      <main ref={scope} className={s.content}>
        <Metadata
          title="Contact"
          description={data ? data.metadata.description : ""}
        />
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
    </AnimatedLayout>
  );
};
