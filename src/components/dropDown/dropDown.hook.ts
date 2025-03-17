import { useState } from "react";

import { TDropDownHook } from "@components/dropDown/dropDown.types";

export const useDropDown = (): TDropDownHook => {
  const [isOpen, setIsOpen] = useState(false);
  const dropwDownPosition = {
    bl: "top-5 right-0",
    br: "top-5 left-0",
    tr: "bottom-5 left-0",
    tl: "bottom-5 right-0",
  };
  return {
    isOpen,
    setIsOpen,
    dropwDownPosition,
  };
};
