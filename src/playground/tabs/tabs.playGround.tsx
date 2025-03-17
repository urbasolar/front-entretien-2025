import { FC } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faUser,
  faUserAlien,
  faUserDoctor,
  faUserEdit,
} from '@fortawesome/pro-regular-svg-icons'

import { Tabs, Tab } from '@components/tabs/tabs'
import { TTabValuesProps, TTabsProps } from '@components/tabs/tabs.types'

export const TabsContent: FC<{ title: string }> = ({ title }): JSX.Element => {
  return (
    <div className='w-full h-max flex justify-center mt-48 text-white items-center text-5xl'>
      <h1>{title}</h1>
    </div>
  )
}

const TabsPlayground: FC<Partial<TTabsProps>> = (): JSX.Element => {
  const navigate = useNavigate()
  const { active_tab } = useParams()

  const TABS: TTabValuesProps[] = [
    {
      label: 'Ants',
      url: '/tabs/ants',
      urlKey: '/ants',
      element: (<FontAwesomeIcon icon={faUser} />) as JSX.Element,
    },
    { label: 'Bears', url: '/tabs/bears', urlKey: '/bears' },
    {
      label: 'Chickens',
      url: '/tabs/chickens',
      urlKey: '/chickens',
      rightElement: <FontAwesomeIcon icon={faUserAlien} />,
    },
    { label: 'Dogs', url: '/tabs/dogs', urlKey: '/dogs' },
    {
      label: 'Elephants',
      url: '/tabs/elephants',
      urlKey: '/elephants',
      element: <FontAwesomeIcon icon={faUserDoctor} />,
      rightElement: <FontAwesomeIcon icon={faUserEdit} />,
    },
    { label: 'Frogs', url: '/tabs/frogs', urlKey: '/frogs' },
  ]

  const activeTab =
    (TABS.find((tab) => tab.urlKey === `/${active_tab}`) as TTabValuesProps) ||
    TABS[0]

  return (
    <div className='w-full self-start'>
      <Tabs currentTabIndex={TABS.indexOf(activeTab)}>
        {TABS.map((TAB) => (
          <Tab
            key={TAB.urlKey}
            label={TAB.label}
            onClick={() => navigate(TAB.url)}
            element={TAB.element}
            rightElement={TAB.rightElement}
          />
        ))}
      </Tabs>
      <div>
        {TABS.map((TAB) => {
          if (activeTab && activeTab.urlKey === TAB.urlKey) {
            return <TabsContent key={TAB.label} title={TAB.label} />
          }
        })}
      </div>
    </div>
  )
}

export default TabsPlayground

