import style from "./Button.module.scss";
import clsx from "clsx";
import { ButtonHTMLAttributes } from "react";

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement>;

export const Button = (props: ButtonProps) => {
  const { children } = props;

  return <button className={clsx(style.button, "Inter500")}>{children}</button>;
};
