import i18next, { TFunctionKeys, TOptions } from 'i18next'
import { useTranslation } from 'react-i18next'

import { TranslationFormat } from '@shared/translation/translationFormat.type'

export const useCustomTranslation = (
  translationFile?: string
): { t: (key: TFunctionKeys, format?: TranslationFormat, options?: TOptions) => string } => {
  const { t } = useTranslation(translationFile)
  return {
    t: (key: TFunctionKeys, format?: TranslationFormat, options?: TOptions) =>
      i18next.format(t(key, options), format),
  }
}
