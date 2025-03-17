import { ReactNode } from 'react'

export type TTabsProps = {
  values?: TTabValuesProps[]
  children?: ReactNode
  currentTabIndex?: number
  collapsible?: boolean
}

export type TTabProps = {
  label: string
  key?: string
  value?: TTabValuesProps
  onClick?: () => void
  children?: ReactNode
  element?: ReactNode
  rightElement?: ReactNode
}

export type TTabValuesProps = {
  label: string
  url: string
  urlKey: string
  element?: ReactNode
  rightElement?: ReactNode
}

