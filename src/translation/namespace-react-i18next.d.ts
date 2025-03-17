// eslint-disable @typescript-eslint/no-empty-interface
import { resources } from './locales/i18n'

declare module 'react-i18next' {
  type DefaultResources = typeof resources['fr']
  interface Resources extends DefaultResources {}
}
