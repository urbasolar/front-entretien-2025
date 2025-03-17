import { TTranslation } from "@shared/translation/translationFormat.type"
import { useCustomTranslation } from "@utils/hooks/useCustomTranslation"

type TFilterHook = {
    t: TTranslation
}

export const useFilter = (): TFilterHook => {
    const { t } = useCustomTranslation()
    return {
        t
    }
}