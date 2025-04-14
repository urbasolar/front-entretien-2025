import i18next, { TOptions } from 'i18next'

import { TranslationFormat } from '@shared/translation/translationFormat.type'

export const t = (key: string | string[], format?: TranslationFormat, options?: TOptions): string =>
  i18next.format(i18next.t(key, options), format)
