import {
  faPen,
  faSquarePlus,
  faTrash,
} from '@fortawesome/pro-regular-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWarning } from '@fortawesome/pro-solid-svg-icons';

import { Button } from '@components/button/button';
import Input from '@components/input/input';
import { Modal } from '@components/modal/modal';
import { useGridTable } from '@components/gridTable/gridTable.hook';
import { TTableProps } from '@components/gridTable/gridTable.type';

export const GridTable = <T,>(props: TTableProps<T>) => {
  const { columnTitles, bulkEdit, avoidKey, actionButtons } = props;
  const {
    t,
    addRow,
    tableData,
    selectedCells,
    setIsOpenBulkInput,
    handleCellClick,
    handleCellChange,
    isSelected,
    setCurrentRow,
    currentRow,
    handleDeleteRow,
    bulkValue,
    setBulkValue,
    handleBulkUpdate,
    handleBulkClear,
    isOpenBulkInput,
    copyRowData,
    duplicateRow,
    highlightedRows,
    errorMessage,
  } = useGridTable(props);

  return (
    <>
      <div className="flex flex-col h-full">
        {tableData.length ? (
          <>
            <div className="flex justify-end gap-m py-m">
              <div className="flex-1 text-center self-center">
                {errorMessage !== '' && (
                  <>
                    <span className="text-black bg-warning-700 p-m rounded-md animate-pulse">
                      <p className="pr-2 inline-block">{errorMessage}</p>
                      <FontAwesomeIcon icon={faWarning} />
                    </span>
                  </>
                )}
              </div>
              <div className="gap-4 flex">
                {actionButtons?.save()}
                <span
                  title={
                    selectedCells.size > 1 ? '' : 'Aucune cellule sélectionnée'
                  }
                >
                  <Button
                    icon={{
                      icon: faPen,
                      color: selectedCells.size > 1 ? 'white' : '#2e3438',
                    }}
                    text="Modifier"
                    onClick={() =>
                      selectedCells.size > 1 && setIsOpenBulkInput(true)
                    }
                    disabled={selectedCells.size < 2}
                    size="md"
                    className="bg-primary hover:bg-primary-800 text-white mt-1"
                  />
                </span>
              </div>
            </div>

            <div
              className={`max-h-[calc(100vh-16rem)] overflow-y-auto rounded bg-dark-mid px-m`}
            >
              <table border={0} className="w-full border-collapse">
                <thead className="sticky top-0 bg-dark-mid w-full">
                  <tr>
                    {/* The first th is necessary to display row number */}
                    <th></th>
                    {columnTitles.map((header, headerIndex) => {
                      if (avoidKey?.includes(header.key)) return null;
                      return (
                        <th key={`${header.title}_${headerIndex}`}>
                          <span>
                            <p className="text-white p-xs">{header.title}</p>
                          </span>
                        </th>
                      );
                    })}
                  </tr>
                </thead>
                <tbody>
                  {tableData.map((row, rowIndex) => {
                    return (
                      <tr key={rowIndex}>
                        <td>
                          <button
                            onClick={(e) => copyRowData(e, row)}
                            onDoubleClick={() => duplicateRow(rowIndex)}
                          >
                            <span className="text-white p-xs">
                              {rowIndex + 1}
                            </span>
                          </button>
                        </td>
                        {row.map((cell, colIndex) => {
                          if (avoidKey?.includes(cell.key)) return null;
                          return (
                            <td
                              key={`${rowIndex}_${colIndex}`}
                              onClick={(e) =>
                                handleCellClick(rowIndex, colIndex, e.shiftKey)
                              }
                              style={{
                                width: `calc(100%/${
                                  columnTitles.length - (avoidKey?.length ?? 0)
                                })`,
                              }}
                            >
                              {columnTitles[colIndex].type === 'text' ||
                              columnTitles[colIndex].type === 'number' ? (
                                <input
                                  type={columnTitles[colIndex].type}
                                  value={cell.value}
                                  onChange={(e) =>
                                    handleCellChange(rowIndex, colIndex, e)
                                  }
                                  className={`w-full border dark:text-white text-black font-thin focus:outline-none p-[4.5px] ${
                                    isSelected(rowIndex, colIndex)
                                      ? 'bg-primary'
                                      : 'bg-white dark:bg-dark-mid'
                                  } transition-colors ease-in-out duration-150 ${
                                    highlightedRows.includes(rowIndex)
                                      ? 'dark:bg-warning-700'
                                      : ''
                                  }`}
                                />
                              ) : columnTitles[colIndex].type === 'select' &&
                                columnTitles[colIndex].options ? (
                                <select
                                  value={cell.value}
                                  onChange={(e) =>
                                    handleCellChange(rowIndex, colIndex, e)
                                  }
                                  className={`w-full bg-white dark:bg-dark-mid dark:text-white text-black font-thin focus:outline-none border border-white p-[6px] transition-colors ease-in-out duration-150 ${
                                    highlightedRows.includes(rowIndex)
                                      ? 'dark:bg-warning-700'
                                      : ''
                                  }`}
                                >
                                  <option disabled>
                                    {t('select_an_option')}
                                  </option>
                                  {columnTitles[colIndex].options?.map(
                                    (option) => (
                                      <option
                                        key={option.value}
                                        value={option.value}
                                      >
                                        {option.label}
                                      </option>
                                    )
                                  )}
                                </select>
                              ) : columnTitles[colIndex].type === 'custom' &&
                                cell.customComponent ? (
                                cell.customComponent
                              ) : (
                                <span>{cell.value}</span>
                              )}
                            </td>
                          );
                        })}
                        <td
                          className="align-middle pl-2 hover:cursor-pointer"
                          onMouseEnter={() => setCurrentRow(rowIndex)}
                          onMouseLeave={() => setCurrentRow(null)}
                          onClick={() => handleDeleteRow(rowIndex)}
                        >
                          <FontAwesomeIcon
                            icon={faTrash}
                            color={currentRow === rowIndex ? 'red' : 'grey'}
                          />
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          </>
        ) : (
          <span className="text-center">
            <p>Aucune donnée</p>
          </span>
        )}
        <div className="flex justify-center  border-transparent pt-2">
          <button
            className="w-[99%] hover:w-[100%] hover:bg-primary bg-primary-100 transition-all ease-in duration-100 p-1 rounded"
            onClick={addRow}
          >
            <span>
              <FontAwesomeIcon icon={faSquarePlus} size="lg" color="white" />
            </span>
          </button>
        </div>
      </div>
      <Modal
        width="w-1/3"
        isOpen={isOpenBulkInput}
        onClose={() => setIsOpenBulkInput(false)}
        title={
          bulkEdit?.modalTitle ??
          t('update_{{cell_quantity}}_cells', undefined, {
            cell_quantity: selectedCells.size,
          })
        }
      >
        <div className="bulk-actions">
          <Input
            type="text"
            placeholder={bulkEdit?.modalPlaceholder}
            value={bulkValue}
            currentValue={(value) => setBulkValue(value)}
            autoFocus
          />
          <div className="grid grid-cols-2 gap-8 p-l">
            <Button
              text={bulkEdit?.button?.valid?.label ?? 'Valider'}
              onClick={handleBulkUpdate}
              variant={bulkEdit?.button?.valid?.color}
            />
            <Button
              text={bulkEdit?.button?.cancel?.label ?? 'Annuler'}
              onClick={handleBulkClear}
              variant={bulkEdit?.button?.cancel?.color ?? 'danger'}
            />
          </div>
        </div>
      </Modal>
    </>
  );
};
