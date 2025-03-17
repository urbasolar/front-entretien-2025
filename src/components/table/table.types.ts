import {
  Cell,
  ColumnDef,
  RowSelectionState,
  Table,
} from "@tanstack/react-table";

export type TTable<T> = {
  data: T[];
  columns: ColumnDef<T, any>[];
  loading: {
    text: string;
    isActive: boolean;
  };
  handleClick?: (cell: Cell<T, unknown>) => void;
  itemsSelected?: (items: RowSelectionState) => void;
  sortingIcon?: JSX.Element;
  options?: {
    pagination?: {
      isActive: boolean;
    };
    rowSelection?: {
      size: number;
    };
  };
};

export type THeader<T> = {
  table: Table<T>;
  sortingIcon?: JSX.Element;
};

export type TSortingIconDefault = {
  sortingDirection: "asc" | "desc" | "none";
};

export type TPaginationButtonDefault<T> = {
  table: Table<T>;
};

export type TPaginationRowHook<T> = TPaginationButtonDefault<T>;
