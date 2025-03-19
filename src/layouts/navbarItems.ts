import {
  faEllipsisVertical
} from '@fortawesome/pro-regular-svg-icons'

import setupI18n from '@translation/setupI18n'
import { t } from '@utils/customTranslation'

setupI18n()

export const navbarItems = [
  {
    path: '/home',
    icon: faEllipsisVertical,
    text: t('home'),
  }
]