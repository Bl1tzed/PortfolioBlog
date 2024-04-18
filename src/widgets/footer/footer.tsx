import { Link } from "react-router-dom";
import s from "./footer.module.scss";

// import { NavLink } from "react-router-dom";
import { ReactSVG } from "react-svg";

export const Footer = () => {
  return (
    <footer className={s.footer}>
      <div className={s.topContainer}></div>
      <div className={s.bottomContainer}>
        <div className={s.footerInfo}>
          <div className={s.footerInfoItem}>Правила и условия</div>
          <div className={s.footerInfoItem}>Политика конфиденциальности</div>
        </div>
        <div className={s.footerIcons}>
          <Link to="https://t.me/BlitzedR">
            <ReactSVG src="svg/telegram.svg" />
          </Link>
          <Link to="https://vk.com/bl1tzed">
            <ReactSVG src="svg/vk.svg" />
          </Link>
        </div>
        <div className={s.copyright}>
          © {new Date().getUTCFullYear()} Bibiblog. All rights reserved.
        </div>
      </div>
    </footer>
  );
};
