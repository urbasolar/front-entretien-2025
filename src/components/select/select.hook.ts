import { useEffect, useRef, useState } from "react";

import { filterOptions } from "./select.utils";
import { Option, SelectProps } from "./select.types";

export const useSelect = (props: SelectProps) => {
  const {
    value,
    options,
    onChange,
    isMulti = false,
    isSearchable = false,
  } = props;
  
  const [isOpen, setIsOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedItem, setSelectedItem] = useState<string>(Array.isArray(value) ? '' : value?.label || '');
  const selectRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  const filteredOptions = isSearchable
    ? filterOptions(options, searchTerm)
    : options;


  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        selectRef.current &&
        !selectRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);
  

  const handleToggle = () => {
    setIsOpen(!isOpen);
    if (!isOpen && inputRef.current) {
      inputRef.current.focus();
    }
  };

  const handleOptionClick = (option: Option) => {
    if (isMulti) {
      const newValue = Array.isArray(value) ? [...value] : [];
      const optionIndex = newValue.findIndex((v) => v.value === option.value);
      if (optionIndex > -1) {
        newValue.splice(optionIndex, 1);
      } else {
        newValue.push(option);
      }
      onChange(newValue);
    } else {
      setSelectedItem(option.label)
      onChange(option);
      setIsOpen(false);
    }
    setSearchTerm('');
    if (inputRef.current) {
      inputRef.current.focus();
    }
  };

  const handleRemoveOption = (option: Option) => {
    if (isMulti && Array.isArray(value)) {
      const newValue = value.filter((v) => v.value !== option.value);
      onChange(newValue);
    }
  };

  const handleClear = (e: React.MouseEvent) => {
    e.stopPropagation();
    onChange(isMulti ? [] : null);
    setSearchTerm('');
  };

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (
      e.key === 'Backspace' &&
      searchTerm === '' &&
      isMulti &&
      Array.isArray(value) &&
      value.length > 0
    ) {
      const newValue = [...value];
      newValue.pop();
      onChange(newValue);
    }
  };
  

  return {
    filteredOptions,
    handleToggle,
    handleOptionClick,
    handleRemoveOption,
    handleClear,
    handleSearchChange,
    handleKeyDown,
    selectRef,
    isOpen,
    inputRef,
    searchTerm,
    selectedItem
  }
}

