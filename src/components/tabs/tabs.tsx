import { FC, Children, ReactElement } from 'react'

import { TTabsProps, TTabProps } from '@components/tabs/tabs.types'
import { useTabs } from '@components/tabs/tabs.hook'

import '@components/tabs/tabs.css'

export const Tab: FC<TTabProps> = (props) => {
  return <>{props.children}</>
}
export const Tabs: FC<TTabsProps> = (props) => {
  const { handleTabClick, tabsChildren, elementsClass } = useTabs(props)
  return (
    <div className='tabs'>
      <div className='tabs__container'>
        {Children.map(tabsChildren, (child, index: number) => {
          const { onClick, element, rightElement, label } = (
            child as ReactElement
          ).props
          return (
            <div
              className={`tabs__header ${elementsClass(index)}`}
              onClick={(event) => {
                handleTabClick(event, index, onClick)
              }}
            >
              <div className={`tabs__header-inside ${elementsClass(index)}`}>
                <div
                  className={`tabs__header-inside-element ${elementsClass(
                    index
                  )}`}
                >
                  {element}
                </div>
                <div
                  className={`tabs__header-inside-label 
                    ${elementsClass(index)}`}
                >
                  {label}
                </div>
                <div
                  className={`tabs__header-inside-rightelement ${elementsClass(
                    index
                  )}`}
                >
                  {rightElement}
                </div>
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}

