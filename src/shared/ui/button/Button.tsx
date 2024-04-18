import clsx from "clsx";
import { ButtonHTMLAttributes } from "react";
import { ReactSVG } from "react-svg";
import { cva, type VariantProps } from "class-variance-authority";

import s from "./button.module.scss";

export type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> &
  VariantProps<typeof buttonVariants> & {
    buttonType?: "default" | "link";
    svg?: boolean;
  };

const buttonVariants = cva(s.button, {
  variants: {
    variant: {
      primary: s.primaryButton,
      secondary: s.secondaryButton,
    },
    size: {
      small: s.smallButton,
      medium: s.mediumButton,
    },
    width: {
      wide: s.wideButton,
    },
  },
  defaultVariants: {
    variant: "primary",
    size: "small",
  },
});

export const Button = (props: ButtonProps) => {
  const { children, variant, size, width, className, svg } = props;

  return (
    <button
      className={clsx(
        buttonVariants({ variant, size, width, className }),
        "Inter500"
      )}
    >
      {children}
      {svg && <ReactSVG src="svg/arrow-up-right.svg" />}
    </button>
  );
};
