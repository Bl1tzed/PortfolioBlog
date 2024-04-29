import clsx from "clsx";
import s from "./banner.module.scss";

type BannerProps = {
  children: string;
  className?: string;
};

export const Banner = (props: BannerProps) => {
  const { children, className } = props;

  return <div className={clsx(s.banner, className)}>{children}</div>;
};
