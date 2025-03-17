import { FC, LazyExoticComponent } from 'react'

export type TComponentsLazyImported = {
  dropdown: LazyExoticComponent<FC>
  input: LazyExoticComponent<FC>
  button: LazyExoticComponent<FC>
  card: LazyExoticComponent<FC>
  drawer: LazyExoticComponent<FC>
  section: LazyExoticComponent<FC>
  select: LazyExoticComponent<FC>
  modal: LazyExoticComponent<FC>
  switch: LazyExoticComponent<FC>
  textarea: LazyExoticComponent<FC>
  table: LazyExoticComponent<FC>
  checkbox: LazyExoticComponent<FC>
  tabs: LazyExoticComponent<FC>
  tooltip: LazyExoticComponent<FC>
  carousel: LazyExoticComponent<FC>
  topBar: LazyExoticComponent<FC>
}

export type TComponents<T> = {
  [key in keyof T]: JSX.Element
}
