import i18next from 'i18next'
import { initReactI18next } from 'react-i18next'

import { resources } from '@translation/locales/i18n'

const setupI18n = (): void => {
  i18next
    .use(initReactI18next) // passes i18n down to react-i18next
    .init({
      ns: ['common'],
      defaultNS: 'common',
      resources,
      lng: 'fr',
      fallbackLng: 'fr',
      keySeparator: '___',
      nsSeparator: ':::',
      interpolation: {
        escapeValue: false,
        format: (value, format) => {
          if (format === 'uppercase') return value.toUpperCase()
          if (format === 'lowercase') return value.toLowerCase()
          if (format === 'noCapitalization') return value
          return `${value.substr(0, 1).toUpperCase()}${value.substr(1)}`
        },
      },
    })
}

export default setupI18n
