import { ETheme } from "@shared/enums";
import { getDataLocalStorage, saveDataLocalStorage } from "@utils/localStorage";

export const toggleDarkMode = () => {
    const themeMode = getDataLocalStorage('themeMode');
    if (themeMode === ETheme.dark) {
      document.documentElement.classList.remove(themeMode);
      saveDataLocalStorage('themeMode', ETheme.light);
    } else {
      document.documentElement.classList.add(ETheme.dark);
      saveDataLocalStorage('themeMode', ETheme.dark);
    }
}