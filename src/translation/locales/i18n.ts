import enCommon from '@translation/locales/en_GB/translation.json'
import esCommon from '@translation/locales/es_ES/translation.json'
import itCommon from '@translation/locales/it_IT/translation.json'
import frCommon from '@translation/locales/fr_FR/translation.json'

export const resources = {
  fr: {
    common: frCommon,
  },
  en: {
    common: enCommon,
  },
  es: {
    common: esCommon,
  },
  it: {
    common: itCommon,
  },
} as const
