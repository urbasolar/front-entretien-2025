import { IconDefinition } from "@fortawesome/pro-regular-svg-icons";
import { Dispatch, SetStateAction } from "react";

export type TNavbarHook = {
  openNavbar: boolean;
  setOpenNavbar: Dispatch<SetStateAction<TNavbarHook["openNavbar"]>>;
  themeMode: string | null;
  isActiveForPaths: (isActive: boolean, paths?: string[]) => boolean;
};

export type TNavbar = {
  items: NavbarItem[];
  itemsBottom?: (Omit<NavbarItem, "path"> & { onClick?: () => void })[];
};

type NavbarItem = {
  path: string;
  icon: IconDefinition;
  text: string;
  pathname?: string[];
  disabled?: boolean;
};
