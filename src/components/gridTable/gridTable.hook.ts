import { ChangeEvent, MouseEvent, useEffect, useState } from 'react'

import { TCellData, TGridTableHook } from './gridTable.type'
import {
  transformArrayDataToGridTableData,
  transformGridTableDataToArrayData,
} from './gridTable.utils'
import { useCustomTranslation } from '@/utils/hooks/useCustomTranslation'

export const useGridTable = <T>(props: TGridTableHook<T>) => {
  const { data, currentGridValue, columnTitles, noDuplicateValue } = props
  const { t } = useCustomTranslation()
  const [tableData, setTableData] = useState<TCellData[][]>(
    transformArrayDataToGridTableData(data)
  )
  const [currentRow, setCurrentRow] = useState<null | number>(null)
  const [selectedCells, setSelectedCells] = useState<Set<string>>(new Set())
  const [bulkValue, setBulkValue] = useState<string | number>('')
  const [isOpenBulkInput, setIsOpenBulkInput] = useState(false)
  const [highlightedRows, setHighlightedRows] = useState<number[]>([])
  const [errorMessage, setErrorMessage] = useState<string>('')
  const [startCell, setStartCell] = useState<{
    rowIndex: number
    colIndex: number
  } | null>(null)

  /**
   * Add a row to the table
   */
  const addRow = () => {
    const newRow = columnTitles.map((title) => {
      return { value: '', key: title.key }
    })
    const updatedTable = [...tableData, newRow]
    setTableData(updatedTable)
  }

  /**
   * Edit one cell of the table
   * @param rowIndex
   * @param colIndex
   * @param event
   */
  const handleCellChange = (
    rowIndex: number,
    colIndex: number,
    event: ChangeEvent<HTMLSelectElement> | ChangeEvent<HTMLInputElement>
  ) => {
    event.preventDefault()
    const updatedTable = [...tableData]
    const updatedTableCopy = updatedTable.map((row) =>
      row.map((cell) => ({ ...cell }))
    )
    const updatedCell = {
      ...updatedTableCopy[rowIndex][colIndex],
      value: event.target.value,
    }
    updatedTableCopy[rowIndex][colIndex] = updatedCell
    setTableData(updatedTableCopy)
    checkDuplicateValueAndDisplayErrorMessage(updatedTableCopy, colIndex)
    currentGridValue &&
      currentGridValue(transformGridTableDataToArrayData(updatedTableCopy))
  }

  /**
   * Check if the value is already used in the column and display an error message
   * @param table
   * @param colIndex
   */
  const checkDuplicateValueAndDisplayErrorMessage = (
    table: TCellData[][],
    colIndex: number
  ) => {
    const duplicateValues = findSimilarValuesInColumn(table, colIndex)
    Object.keys(duplicateValues).forEach((key) => {
      if (duplicateValues[key].length > 1) {
        // Add + 1 to rowIndex to match the index of the table
        const udpatedRowIndex = duplicateValues[key].map((index) => index + 1)
        setErrorMessage(
          t(
            `the_value_{{key}}_is_already_used_at_column_{{columnName}}_{{rowIndex}}`,
            undefined,
            {
              key,
              rowIndex: udpatedRowIndex.join(', '),
              columnName: columnTitles[colIndex].title,
            }
          )
        )
        return
      }
    })
  }

  /**
   * Delete a row
   * @param rowToDelete
   */
  const handleDeleteRow = (rowToDelete: number) => {
    const updateTable = tableData.filter((_, index) => index !== rowToDelete)
    setTableData(updateTable)
    currentGridValue &&
      currentGridValue(transformGridTableDataToArrayData(updateTable))
    if (tableData.length === 1) {
      setCurrentRow(null)
    }
  }

  /**
   * Handle multiple cells
   * @param rowIndex
   * @param colIndex
   * @param shiftKey
   */
  const handleCellClick = (
    rowIndex: number,
    colIndex: number,
    shiftKey: boolean
  ) => {
    const cellKey = `${rowIndex}-${colIndex}`
    const updatedSelection = new Set(selectedCells)

    if (shiftKey) {
      if (!startCell) {
        setStartCell({ rowIndex, colIndex })
        updatedSelection.add(cellKey) // Sélection initiale
      } else if (startCell && colIndex === startCell.colIndex) {
        // Si même colonne, sélection de toutes les cellules entre la première et la dernière
        const [minRow, maxRow] = [startCell.rowIndex, rowIndex].sort(
          (a, b) => a - b
        )
        for (let i = minRow; i <= maxRow; i++) {
          updatedSelection.add(`${i}-${colIndex}`)
        }
        setStartCell(null) // Réinitialisation après la sélection
      }
    } else {
      // Si pas de shift, ne sélectionner qu'une seule cellule
      updatedSelection.clear()
      updatedSelection.add(cellKey)
      setStartCell({ rowIndex, colIndex })
    }

    setSelectedCells(updatedSelection)
  }

  /**
   * Check if the cell is selected to apply a style
   * @param rowIndex
   * @param colIndex
   * @returns
   */
  const isSelected = (rowIndex: number, colIndex: number) => {
    return (
      selectedCells.has(`${rowIndex}-${colIndex}`) && selectedCells.size > 1
    )
  }

  /**
   * Handle bulk update
   */
  const handleBulkUpdate = () => {
    const updatedTable = [...tableData]
    const selectedCellsCopy = new Set(selectedCells)
    selectedCellsCopy.forEach((cellKey) => {
      const [rowIndex, colIndex] = cellKey.split('-').map(Number)
      checkDuplicateValueAndDisplayErrorMessage(updatedTable, colIndex)
      updatedTable[rowIndex][colIndex].value = bulkValue
    })
    setSelectedCells(selectedCellsCopy)
    setTableData(updatedTable)
    setIsOpenBulkInput(false)
    setBulkValue('')
  }

  /**
   * Handle bulk clear
   */
  const handleBulkClear = () => {
    const updatedTable = [...tableData]
    const selectedCellsCopy = new Set(selectedCells)
    selectedCellsCopy.forEach((cellKey) => {
      const [rowIndex, colIndex] = cellKey.split('-').map(Number)
      updatedTable[rowIndex][colIndex].value = ''
    })
    setSelectedCells(selectedCellsCopy)
    setTableData(updatedTable)
    setIsOpenBulkInput(false)
  }

  /**
   * Copy row data to clipboard
   * @param e
   * @param row
   * @returns
   */
  const copyRowData = (e: MouseEvent<any, any>, row: TCellData[]) => {
    if (e.detail > 1) return // Prevent double click from triggering the copy action
    const rowString = row.map((cell) => cell.value).join(' ')
    navigator.clipboard.writeText(rowString)
  }

  /**
   * Duplicate a row in the table with double click
   * @param rowIndex
   */
  const duplicateRow = (rowIndex: number) => {
    // Create a deep copy of the row to avoid reference issues
    const rowToDuplicate = tableData[rowIndex].map((cell) => ({ ...cell }))
    const updatedTable = [...tableData]
    updatedTable.splice(rowIndex + 1, 0, rowToDuplicate) // Insert new row after the original
    setTableData(updatedTable)
    setHighlightedRows([rowIndex + 1]) // Indicate the new row for visual effect
    // Remove the highlight effect after 1 second
    setTimeout(() => setHighlightedRows([]), 400)
  }

  /**
   * Find similar values in a column if noDuplicateValue is provided
   * @param tableData
   * @param columnIndex
   * @returns
   */
  const findSimilarValuesInColumn = (
    tableData: TCellData[][],
    columnIndex: number
  ): Record<string | number, number[]> => {
    const similarValues: Record<string | number, number[]> = {}

    tableData.forEach((row, rowIndex) => {
      if (
        noDuplicateValue &&
        !noDuplicateValue.includes(row[columnIndex].key)
      ) {
        return
      }
      const cellValue = row[columnIndex]?.value
      if (cellValue !== undefined && cellValue !== '') {
        if (!similarValues[cellValue]) {
          similarValues[cellValue] = []
        }
        similarValues[cellValue].push(rowIndex)
      }
    })

    return similarValues
  }

  useEffect(() => {
    if (currentGridValue) {
      currentGridValue(transformGridTableDataToArrayData(tableData))
    }
  }, [currentGridValue, tableData])

  useEffect(() => {
    setTableData(transformArrayDataToGridTableData(data))
  }, [data])

  return {
    t,
    tableData,
    selectedCells,
    setIsOpenBulkInput,
    addRow,
    handleCellClick,
    handleCellChange,
    isSelected,
    setCurrentRow,
    currentRow,
    handleDeleteRow,
    bulkValue,
    setBulkValue,
    isOpenBulkInput,
    handleBulkUpdate,
    handleBulkClear,
    copyRowData,
    duplicateRow,
    highlightedRows,
    errorMessage,
  }
}

