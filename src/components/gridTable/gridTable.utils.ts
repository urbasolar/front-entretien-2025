import { TCellData } from "@/components/gridTable/gridTable.type";

/**
 * Transform array data to an array of arrays of key-value pairs
 * @param data  Array of objects
 * @returns Array of arrays of key-value pairs
 */
export const transformArrayDataToGridTableData = <
  T extends Record<string, any>,
>(
  data: T[],
): TCellData[][] => {
  return data.map((obj: T) =>
    Object.entries(obj).map(([key, value]) => ({
      key,
      value: value === null ? "" : value,
    })),
  );
};

/**
 * Transform grid table data (array of arrays of key-value pairs) back to the original array of objects
 * @param gridData Array of arrays of key-value pairs
 * @returns Original array of objects
 */
export const transformGridTableDataToArrayData = <
  T extends Record<string, any>,
>(
  gridData: { key: string; value: any }[][],
): T[] => {
  return gridData.map((row) =>
    row.reduce((acc, cell) => {
      (acc as any)[cell.key] = cell.value; // Reconstruct each key-value pair into the object
      return acc;
    }, {} as T),
  );
};
