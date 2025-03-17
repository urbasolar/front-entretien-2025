import { TFunctionKeys, TOptions } from 'i18next'

import {
  LOWERCASE,
  NO_CAPITALIZATION,
  UPPERCASE,
  CAPITALIZE,
} from '@shared/constants/string-format.constant'

export type TTranslation = (
  key: TFunctionKeys,
  format?: TranslationFormat | undefined,
  options?: TOptions | undefined
) => string

export type TranslationFormat =
  | typeof UPPERCASE
  | typeof LOWERCASE
  | typeof NO_CAPITALIZATION
  | typeof CAPITALIZE

