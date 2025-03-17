import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

import { TNavbarHook } from "@components/navbar/navbar.types";
import { getDataLocalStorage } from "@utils/localStorage";

export const useNavbar = (): TNavbarHook => {
  const [openNavbar, setOpenNavbar] = useState(true);
  const [themeMode, setThemeMode] = useState(getDataLocalStorage("themeMode"));
  const location = useLocation();

  const isActiveForPaths = (isActive: boolean, paths?: string[]) => {
    if (isActive) return true;
    return paths?.some((path) => {
      const regexPath = path.replace(/:\w+/g, "[^/]+");
      const regex = new RegExp(`^${regexPath}$`);
      return regex.test(location.pathname);
    })
      ? true
      : false;
  };

  useEffect(() => {
    const handleStorage = () => {
      const mode = getDataLocalStorage("themeMode");
      setThemeMode(mode);
    };
    window.addEventListener("storage", handleStorage);
    return () => window.removeEventListener("storage", handleStorage);
  }, []);

  return {
    openNavbar,
    setOpenNavbar,
    themeMode,
    isActiveForPaths,
  };
};
