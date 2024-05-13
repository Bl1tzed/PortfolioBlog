import s from "./footer.module.scss";

import { SocialLinkBlock } from "@shared/ui/social-link-block";

export const Footer = () => {
  return (
    <footer className={s.footer}>
      <div className={s.footerInner}>
        <div className={s.topContainer}></div>
        <div className={s.bottomContainer}>
          <div className={s.footerInfo}>
            <div className={s.footerInfoItem}>Правила и условия</div>
            <div className={s.footerInfoItem}>Политика конфиденциальности</div>
          </div>
          <SocialLinkBlock className={s.footerIcons} />
          <div className={s.copyright}>
            © {new Date().getUTCFullYear()} Bibiblog. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
};
