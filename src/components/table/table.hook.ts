import { useEffect, useState } from 'react'
import {
  PaginationState,
  SortingState,
  getCoreRowModel,
  getSortedRowModel,
  getPaginationRowModel,
  useReactTable,
  Cell,
  Table,
  RowSelectionState,
} from '@tanstack/react-table'

import { PAGINATION_SIZE_DEFAULT } from '@components/shared/constants/globals.constants'
import { TTable } from '@components/table/table.types'

export const useTable = <T>(props: TTable<T>) => {
  const { data, columns, itemsSelected, handleClick, options } = props

  const [rowSelection, setRowSelection] = useState<RowSelectionState>({})
  const [sorting, setSorting] = useState<SortingState>([])
  const [pagination, setPagination] = useState<PaginationState>({
    pageIndex: 0,
    pageSize: options?.rowSelection?.size || PAGINATION_SIZE_DEFAULT,
  })

  useEffect(() => {
    if (itemsSelected) {
      itemsSelected(rowSelection)
    }
  }, [rowSelection, itemsSelected])

  const handleCellClicked = (cell: Cell<T, unknown>) => {
    if (handleClick) {
      handleClick(cell)
    }
  }

  const selectRowPerPage = (nbRows: number) => {
    table.setPageSize(nbRows)
  }

  const table: Table<T> = useReactTable({
    data,
    columns,
    state: {
      rowSelection,
      sorting,
      pagination,
    },
    enableRowSelection: true,
    onRowSelectionChange: setRowSelection,
    getCoreRowModel: getCoreRowModel(),
    onSortingChange: setSorting,
    onPaginationChange: (updater) => setPagination(updater),
    getSortedRowModel: getSortedRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
  })

  return {
    table,
    rowSelection,
    handleCellClicked,
    setPagination,
    pagination,
    selectRowPerPage,
  }
}

