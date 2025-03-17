import { ReactNode } from 'react'

export type TTooltipProps = {
  children: ReactNode
  tooltipContent: ReactNode
  condition?: boolean
  position?: 'top' | 'right' | 'bottom' | 'left'
  backgroundColor?: 'primary' | 'black'
  cssPosition?: 'abs' | 'rel'
  inlineStyle?: React.CSSProperties
}

