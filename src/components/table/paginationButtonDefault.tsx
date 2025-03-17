import { TPaginationButtonDefault } from "@components/table";

import "@components/table/paginationButtonDefault.css";
import { usePaginationRow } from "./paginationRow.hook";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronLeft,
  faChevronRight,
  faChevronsLeft,
  faChevronsRight,
} from "@fortawesome/pro-regular-svg-icons";

export const PaginationButtonDefault = <T,>(
  props: TPaginationButtonDefault<T>,
): JSX.Element => {
  const { table } = props;
  const { handleInputPageIndex, value } = usePaginationRow(props);

  return (
    <div className="pagination justify-end pr-2">
      <div className="content-end">
        <button
          className={`pagination__button ${
            !table.getCanPreviousPage() ? "disabled" : ""
          }`}
          onClick={() => handleInputPageIndex(1)}
          disabled={!table.getCanPreviousPage()}
        >
          <FontAwesomeIcon icon={faChevronsLeft} />
        </button>
      </div>
      <div className="content-end">
        <button
          className={`pagination__button ${
            !table.getCanPreviousPage() ? "disabled" : ""
          }`}
          onClick={() => handleInputPageIndex(Number(value) - 1)}
          disabled={!table.getCanPreviousPage()}
        >
          <FontAwesomeIcon icon={faChevronLeft} />
        </button>
      </div>
      <div className="flex gap-2 items-center">
        <input
          className="bg-transparent border border-transparent hover:border-primary focus:outline-none focus:border-slate-primary rounded-md w-10 text-primary text-center [&::-webkit-inner-spin-button]:appearance-none"
          type="number"
          onChange={(e) => handleInputPageIndex(Number(e.target.value))}
          value={value}
          min={1}
          max={table.getPageCount() - 1}
        ></input>
        <p className="pagination__info">{`/ ${table.getPageCount() - 1}`}</p>
      </div>
      <div className="content-end">
        <button
          className={`pagination__button ${
            !table.getCanNextPage() ? "disabled" : ""
          }`}
          onClick={() => handleInputPageIndex(Number(value) + 1)}
          disabled={!table.getCanNextPage()}
        >
          <FontAwesomeIcon icon={faChevronRight} />
        </button>
      </div>
      <div className="content-end">
        <button
          className={`pagination__button ${
            !table.getCanNextPage() ? "disabled" : ""
          }`}
          onClick={() => handleInputPageIndex(table.getPageCount() - 1)}
          disabled={!table.getCanNextPage()}
        >
          <FontAwesomeIcon icon={faChevronsRight} />
        </button>
      </div>
    </div>
  );
};
