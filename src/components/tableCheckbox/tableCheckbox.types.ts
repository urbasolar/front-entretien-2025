import { HTMLProps } from "react";

export type TCheckbox = {
  indeterminate?: boolean;
} & HTMLProps<HTMLInputElement>;
