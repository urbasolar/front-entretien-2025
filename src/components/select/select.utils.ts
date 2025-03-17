import { Option } from "./select.types"

export const filterOptions = (options: Option[], inputValue: string): Option[] => {
  return options.filter((option) => option.label.toLowerCase().includes(inputValue.toLowerCase()))
}

export const getDisplayValue = (value: Option | Option[] | null, isMulti: boolean): string => {
  if (!value) return ""
  if (isMulti && Array.isArray(value)) {
    return value.map((v) => v.label).join(", ")
  }
  return (value as Option).label
}

