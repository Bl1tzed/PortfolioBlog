import s from "./socialLinkBlock.module.scss";
import { cva, type VariantProps } from "class-variance-authority";
import { ReactSVG } from "react-svg";
import { Link } from "react-router-dom";
import { SOCIAL_LINKS } from "@shared/consts";
import clsx from "clsx";

type SocialLinkBlockProps = VariantProps<typeof socialLinkBlockVariants> & {
  className?: string;
};

const socialLinkBlockVariants = cva(s.contentBlock, {
  variants: {
    variant: {
      button: s.button,
      default: s.default,
    },
  },
  defaultVariants: {
    variant: "default",
  },
});

export const SocialLinkBlock = (props: SocialLinkBlockProps) => {
  const { className, variant, ...other } = props;

  return (
    <div className={clsx(s.socialLinksBlock, className)}>
      {SOCIAL_LINKS.map((social) => (
        <Link
          key={social.name}
          to={social.link}
          className={clsx(socialLinkBlockVariants({ variant }))}
          {...other}
        >
          <ReactSVG src={social.svgSrc} />
        </Link>
      ))}
    </div>
  );
};
