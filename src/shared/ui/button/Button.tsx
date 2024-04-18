import clsx from "clsx";
import { ButtonHTMLAttributes } from "react";
import { ReactSVG } from "react-svg";
import { cva } from "class-variance-authority";

import s from "./button.module.scss";

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  buttonType?: "default" | "link";
  variant?: "primary" | "secondary";
  size?: "small" | "medium";
  width?: "wide";
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
