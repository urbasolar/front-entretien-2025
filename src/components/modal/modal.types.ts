import { TSection } from '@components/section/section.types'

export type TModal = {
  children: React.ReactNode
  isOpen: boolean
  onClose: (item: any) => void
  title?: string
  icon?: TSection['icon']
  width?: string
}

