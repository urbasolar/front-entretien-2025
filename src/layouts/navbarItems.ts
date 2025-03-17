import {
  faClone,
  faEllipsisVertical,
  faHandPointDown,
  faIdCard,
  faInputText,
  faParagraph,
  faSection,
  faSidebarFlip,
  faSquareChevronDown,
  faTable,
  faToggleOn,
  faTags,
  faMessage,
  faRectangleVerticalHistory,
  faGrid2Plus,
} from '@fortawesome/pro-regular-svg-icons'

import setupI18n from '@translation/setupI18n'
import { t } from '@utils/customTranslation'

setupI18n()

export const navbarItems = [
  {
    path: '/dropdown',
    icon: faEllipsisVertical,
    text: t('dropdown'),
  },
  {
    path: '/topBar',
    icon: faEllipsisVertical,
    text: t('topBar'),
  },
  {
    path: '/input',
    icon: faInputText,
    text: t('input'),
  },
  {
    path: '/button',
    icon: faHandPointDown,
    text: t('button'),
  },
  {
    path: '/card',
    icon: faIdCard,
    text: t('card'),
  },
  {
    path: '/drawer',
    icon: faSidebarFlip,
    text: t('drawer'),
  },
  {
    path: '/section',
    icon: faSection,
    text: t('section'),
  },
  {
    path: '/select',
    icon: faSquareChevronDown,
    text: t('select'),
  },
  {
    path: '/modal',
    icon: faClone,
    text: t('modal'),
  },
  {
    path: '/switch',
    icon: faToggleOn,
    text: t('switch'),
  },
  {
    path: '/textarea',
    icon: faParagraph,
    text: t('textarea'),
  },
  {
    path: '/table',
    icon: faTable,
    text: t('table'),
  },
  {
    path: '/checkbox',
    icon: faClone,
    text: t('checkbox'),
  },
  {
    path: '/tabs',
    icon: faTags,
    text: t('tabs'),
  },
  {
    path: '/tooltip',
    icon: faMessage,
    text: t('tooltip'),
  },
  {
    path: '/carousel',
    icon: faRectangleVerticalHistory,
    text: t('carousel'),
  },
  {
    path: '/gridTable',
    icon: faGrid2Plus,
    text: t('grid_table'),
  },
]

