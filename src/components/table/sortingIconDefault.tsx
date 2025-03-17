import { FC } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSortUp, faSortDown } from "@fortawesome/pro-solid-svg-icons";

import { TSortingIconDefault } from "@components/table/table.types";

import "@components/table/sortingIconDefault.css";

export const SortingIconDefault: FC<TSortingIconDefault> = ({
  sortingDirection,
}) => {
  return (
    <div className="sortingIcon">
      <FontAwesomeIcon
        icon={faSortUp}
        className={`sortingIcon__asc ${
          sortingDirection === "asc" ? "active" : ""
        }`}
      />
      <FontAwesomeIcon
        icon={faSortDown}
        className={`sortingIcon__desc ${
          sortingDirection === "desc" ? "active" : ""
        }`}
      />
    </div>
  );
};
