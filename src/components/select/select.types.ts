export interface Option {
    value: string | number
    label: string
}
  
export interface SelectProps {
    options: Option[]
    value: Option | Option[] | null
    onChange: (value: Option | Option[] | null) => void
    placeholder?: string
    isMulti?: boolean
    isSearchable?: boolean
    isClearable?: boolean
    error?: string
    className?: string
    inputStyle?: string
    menuTop?: boolean
    containerStyle?: string
    size?: 'sm' | 'md' | 'lg' | 'xl' | 'full'
}

export interface TagProps {
    option: Option
    onRemove: (option: Option) => void
}
  
  
export type TOptionsWithIndex = Option & {
    index?: number;
};