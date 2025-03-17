import { useState, Children, MouseEvent, useEffect } from 'react'

import { TTabsProps } from '@components/tabs/tabs.types'

export const useTabs = (props: TTabsProps) => {
  const { children, currentTabIndex } = props
  const tabsChildren = Children.toArray(children)
  const [activeTab, setActiveTab] = useState<number>(currentTabIndex || 0)

  const elementsClass = (index: number) =>
    `${index === activeTab ? 'active' : ''} ${
      props.collapsible ? 'collapsible' : ''
    }`

  /**
   * Handles the click event on a tab.
   *
   * @param event - The click event.
   * @param index - The index of the tab.
   * @param onClick - Optional callback function to be executed on click.
   */
  const handleTabClick = (
    event: MouseEvent<HTMLDivElement, globalThis.MouseEvent>,
    index: number,
    onClick: () => void
  ) => {
    event.preventDefault()
    onClick && onClick()
    setActiveTab(index)
  }

  useEffect(() => {
    if (currentTabIndex !== undefined) {
      setActiveTab(currentTabIndex)
    }
  }, [currentTabIndex])

  return {
    activeTab,
    setActiveTab,
    tabsChildren,
    handleTabClick,
    elementsClass,
  }
}

