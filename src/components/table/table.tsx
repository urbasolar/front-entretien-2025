import { flexRender, Header } from '@tanstack/react-table';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSpinner } from '@fortawesome/pro-regular-svg-icons';

import { Select } from '@components/select/select';
import { TOptionsWithIndex } from '@components/select/select.types';
import {
  SortingIconDefault,
  PaginationButtonDefault,
  TTable,
  THeader,
} from '@components/table/index';
import { selectRowPerPageOptions } from '@components/table/table.constants';
import { useTable } from '@components/table/table.hook';
import '@components/table/table.css';

const HeaderElement = <T,>(props: THeader<T>) => {
  const { table } = props;

  /**
   * Returns the sorting title based on the header's sorting order.
   * @param _header - The header object containing the column and sorting information.
   * @returns The sorting title or undefined if sorting is not allowed.
   */
  const sortingTitle = (_header: Header<T, unknown>): string | undefined => {
    if (!_header.column.getCanSort()) {
      return undefined;
    } else {
      switch (_header.column.getNextSortingOrder()) {
        case 'asc':
          return 'Sort ascending';
        case 'desc':
          return 'Sort descending';
        default:
          return 'Clear sort';
      }
    }
  };
  return (
    <>
      {table.getHeaderGroups().map((headerGroup) => (
        <tr key={headerGroup.id} className="table__head-tr">
          {headerGroup.headers.map((header) => {
            return (
              <th
                className={`table__head-th ${
                  header.column.getCanSort() ? 'cursor-pointer select-none' : ''
                }`}
                key={header.id}
                style={{
                  width: `  ${header.getSize()}px`,
                }}
                onClick={header.column.getToggleSortingHandler()}
                title={sortingTitle(header)}
              >
                <div className="table__head-inside">
                  {(header.column.getCanSort() &&
                    {
                      asc: <SortingIconDefault sortingDirection="asc" />,
                      desc: <SortingIconDefault sortingDirection="desc" />,
                    }[header.column.getIsSorted() as string]) ?? (
                    <SortingIconDefault sortingDirection="none" />
                  )}
                  {header.isPlaceholder
                    ? null
                    : flexRender(
                        header.column.columnDef.header,
                        header.getContext()
                      )}
                </div>
              </th>
            );
          })}
        </tr>
      ))}
    </>
  );
};

export const Table = <T,>(props: TTable<T>): JSX.Element => {
  const { sortingIcon, options, loading } = props;
  const { table, handleCellClicked, selectRowPerPage } = useTable(props);
  return (
    <>
      <div className="flex flex-col h-full">
        <div className="max-h-[calc(100vh-11rem)] overflow-y-auto">
          <table className="w-full">
            <thead className="table__head sticky top-0">
              <HeaderElement table={table} sortingIcon={sortingIcon} />
            </thead>
            <tbody className="table__body">
              {table.getRowModel().rows.map((row) => (
                <tr className="table__body-tr" key={row.id}>
                  {row.getVisibleCells().map((cell) => {
                    return (
                      <td
                        className="table__body-td"
                        key={cell.id}
                        onClick={() => handleCellClicked(cell)}
                      >
                        {flexRender(
                          cell.column.columnDef.cell,
                          cell.getContext()
                        )}
                      </td>
                    );
                  })}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
      <div
        className={`flex ${
          options?.rowSelection?.size ? 'justify-end' : 'justify-between'
        }`}
      >
        {loading.isActive ? (
          <div className="text-center w-full pt-xl">
            <FontAwesomeIcon icon={faSpinner} spin color="white" size="2x" />
            <p className="text-white">{loading.text}</p>
          </div>
        ) : (
          <>
            {options && !options?.rowSelection?.size && (
              <Select
                options={selectRowPerPageOptions}
                menuTop
                onChange={(selectedValue) =>
                  selectRowPerPage(
                    (selectedValue as TOptionsWithIndex).value as number
                  )
                }
                value={selectRowPerPageOptions}
              />
            )}
            {options &&
              options.pagination?.isActive &&
              table.getPageCount() > 1 && (
                <PaginationButtonDefault table={table} />
              )}
          </>
        )}
      </div>
    </>
  );
};
