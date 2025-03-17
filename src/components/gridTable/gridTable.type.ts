import { TButton } from "../button/button.types";

export type TCellData = {
  value: string | number;
  key: string;
  customComponent?: React.ReactNode;
};

type TObj<T> = T extends Record<string, any> ? T : never;

export type TTableProps<T> = {
  columnTitles: {
    title: string;
    type: "text" | "number" | "select" | "custom";
    key: string;
    options?: {
      value: string;
      label: string;
    }[];
  }[];
  data: TObj<T>[];
  currentGridValue?: (value: TObj<T>[]) => void;
  bulkEdit?: {
    modalTitle: string;
    modalPlaceholder: string;
    button?: {
      valid?: {
        label: string;
        color?: TButton["variant"];
      };
      cancel?: {
        label: string;
        color?: TButton["variant"];
      };
    };
  };
  gridHeight?: string;
  avoidKey?: string[];
  actionButtons?: {
    save: () => JSX.Element;
  };
  noDuplicateValue?: string[];
};

export type TGridTableHook<T> = TTableProps<T>;
