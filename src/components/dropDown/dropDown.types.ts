import { Dispatch, SetStateAction } from "react";

export type TDropDownHook = {
  isOpen: boolean;
  setIsOpen: Dispatch<SetStateAction<boolean>>;
  dropwDownPosition: {
    bl: string;
    br: string;
    tr: string;
    tl: string;
  };
};

export type TDropDown = {
  children: React.ReactNode;
  direction?: "row" | "col";
  position?: "bl" | "br" | "tl" | "tr";
};
