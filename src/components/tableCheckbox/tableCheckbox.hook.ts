import { useEffect, useRef } from 'react'

import { TCheckbox } from '@components/tableCheckbox/tableCheckbox.types'

export const useTableCheckbox = (props: TCheckbox) => {
  const { indeterminate, ...rest } = props
  const ref = useRef<HTMLInputElement>(null!)

  useEffect(() => {
    if (typeof indeterminate === 'boolean') {
      ref.current.indeterminate = !rest.checked && indeterminate
    }
  }, [ref, indeterminate, rest.checked])

  const handleClick = (e: any) => {
    if (rest.onChange) {
      rest.onChange(e)
    }
  }

  return {
    ref,
    handleClick,
  }
}

