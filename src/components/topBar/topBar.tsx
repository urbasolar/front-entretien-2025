import { FC } from "react";

import { Breadcrumbs } from "@components/breadcrumb/breadcrumb";
import { TTopBar } from "@components/topBar/topBar.types";

import "@components/topBar/topBar.css";

export const TopBar: FC<TTopBar> = ({ elements }): JSX.Element => {
  return (
    <div id="topbar" className="top-bar">
      <Breadcrumbs />
      <div className="flex">
        {elements &&
          elements.map((element, index) => <div key={index}>{element}</div>)}
      </div>
    </div>
  );
};
