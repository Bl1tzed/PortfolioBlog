import { cva, type VariantProps } from "class-variance-authority";
import { ReactNode } from "react";
import clsx from "clsx";

import s from "./content-block.module.scss";

type ContentBlockProps = VariantProps<typeof contentBlockVariants> & {
  children: ReactNode;
  className?: string;
};

const contentBlockVariants = cva(s.contentBlock, {
  variants: {
    border: {
      true: s.border,
    },
    bgColor: {
      dark_10: s.bgDark_10,
      dark_08: s.bgDark_08,
    },
  },
});

export const ContentBlock = (props: ContentBlockProps) => {
  const { border, bgColor, children, className } = props;

  return (
    <div className={clsx(contentBlockVariants({ border, bgColor }), className)}>
      {children}
    </div>
  );
};
