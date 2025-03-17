import { useState } from 'react'

import { TPaginationRowHook } from './table.types'

export const usePaginationRow = <T>(props: TPaginationRowHook<T>) => {
  const [value, setValue] = useState<number | undefined>(1)
  const { table } = props

  /**
   *  Handle input page index to set the page index
   * @param event
   * @returns
   */
  const handleInputPageIndex = (pageIndex: number) => {
    const newValue = pageIndex
    // If the value is 0, set the value to undefined
    if (newValue === 0) {
      setValue(undefined)
      return
    }
    setValue(newValue)

    if (newValue < 1 || newValue >= table.getPageCount() - 1) {
      return
    }
    // Set the page index from the table component
    table.setPageIndex(newValue)
  }

  return {
    handleInputPageIndex,
    value,
  }
}

