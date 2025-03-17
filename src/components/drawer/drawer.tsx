import { FC, useState } from "react";

import { Button } from "@components/button/button";
import { computeStyles } from "@utils/computeStyles";
import { useCustomTranslation } from "@utils/hooks/useCustomTranslation";
import { TDrawer } from "@components/drawer/drawer.types";

import "@components/drawer/drawer.css";

export const Drawer: FC<TDrawer> = (props: TDrawer) => {
  const { btnLabel, displayBtn = true, children } = props;
  const { t } = useCustomTranslation();
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="h-screen">
      {displayBtn && (
        <div
          className={computeStyles("drawer-btn", {
            condition: isOpen,
            valid: "drawer-btn-open",
          })}
        >
          <Button
            text={btnLabel ?? isOpen ? t("close") : t("open")}
            type="button"
            onClick={() => setIsOpen(!isOpen)}
          />
        </div>
      )}
      <div
        id="drawer"
        className={computeStyles("drawer", {
          condition: isOpen,
          valid: "translate-x-0",
          unvalid: "translate-x-full",
        })}
      >
        {children}
      </div>
    </div>
  );
};
