import React, {
  AnchorHTMLAttributes,
  ButtonHTMLAttributes,
  LinkHTMLAttributes,
} from "react";

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  primary?: boolean;
  disable?: boolean;
}

export const Button = (props: ButtonProps) => {
  return <button>{props.children}</button>;
};
