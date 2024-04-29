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
    borderRight: {
      true: s.borderRight,
    },
    borderLeft: {
      true: s.borderLeft,
    },
    bgColor: {
      dark_15: s.bgDark_15,
      dark_10: s.bgDark_10,
      dark_08: s.bgDark_08,
    },
  },
});

export const ContentBlock = (props: ContentBlockProps) => {
  const { border, borderLeft, borderRight, bgColor, children, className } =
    props;

  return (
    <div
      className={clsx(
        contentBlockVariants({ borderLeft, borderRight, border, bgColor })
      )}
    >
      <div className={clsx(s.contentBlockInner, className)}>{children}</div>
    </div>
  );
};
