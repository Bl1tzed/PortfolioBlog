import clsx from "clsx";
import { ButtonHTMLAttributes } from "react";
import { ReactSVG } from "react-svg";
import { cva, type VariantProps } from "class-variance-authority";

import s from "./button.module.scss";

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> &
  VariantProps<typeof buttonVariants> & {
    svgSrc?: string;
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
      big: s.bigButton,
    },
    width: {
      wide: s.wideButton,
      adaptive: s.adaptiveButton,
    },
    active: {
      true: s.activeButton,
    },
  },
  defaultVariants: {
    variant: "primary",
    size: "small",
  },
});

export const Button = (props: ButtonProps) => {
  const {
    children,
    variant,
    size,
    width,
    active,
    className,
    svgSrc,
    ...other
  } = props;

  return (
    <button
      className={clsx(
        buttonVariants({ variant, size, width, active, className })
      )}
      {...other}
    >
      {children}
      {svgSrc && <ReactSVG src={svgSrc} />}
    </button>
  );
};
