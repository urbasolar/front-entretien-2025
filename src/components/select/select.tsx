import { faChevronUp, faXmark } from '@fortawesome/pro-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import type React from 'react';

import { useSelect } from './select.hook';
import { Option, SelectProps } from './select.types';
import { Tag } from './tag';

export const Select: React.FC<SelectProps> = (props: SelectProps) => {
  const {
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
    selectedItem,
  } = useSelect(props);
  const {
    value,
    placeholder = 'Select...',
    isMulti = false,
    isClearable = false,
    error,
    className = '',
    inputStyle,
    containerStyle,
    menuTop = false,
    size = 'full',
  } = props;

  const selectContainerSize = {
    sm: 'w-32',
    md: 'w-48',
    lg: 'w-64',
    xl: 'w-96',
    full: 'w-full',
  };

  return (
    <div
      className={`relative ${className} ${containerStyle} ${selectContainerSize[size]}`}
      ref={selectRef}
    >
      <div
        onClick={handleToggle}
        className={`overflow-y-auto flex items-center flex-wrap px-2 border border-gray-500 hover:border-primary rounded-md cursor-text ${
          isOpen ? 'border-blue-500' : 'border-gray-300'
        } ${error ? 'border-red-500' : ''} ${inputStyle}`}
      >
        {isMulti && Array.isArray(value) && value.length > 0 && (
          <div className="flex flex-wrap">
            {value.map((option) => (
              <Tag
                key={option.value}
                option={option}
                onRemove={handleRemoveOption}
              />
            ))}
          </div>
        )}
        <div className="flex-1 min-w-[50px]">
          <input
            ref={inputRef}
            type="text"
            value={searchTerm !== '' ? searchTerm : selectedItem}
            onChange={handleSearchChange}
            onKeyDown={handleKeyDown}
            className="w-full outline-none bg-transparent text-white h-9"
            placeholder={
              isMulti && Array.isArray(value) && value.length > 0
                ? ''
                : placeholder
            }
          />
        </div>
        <div className="flex items-center ml-auto absolute right-2">
          {isClearable && value && (value as Option[]).length > 0 && (
            <FontAwesomeIcon
              icon={faXmark}
              className="mr-1 text-gray-400 hover:text-gray-600 cursor-pointer"
              onClick={handleClear}
            />
          )}
          <FontAwesomeIcon
            className={`text-gray-400 transition-transform duration-200 ${
              isOpen ? 'rotate-180' : ''
            }`}
            icon={faChevronUp}
          />
        </div>
      </div>
      {isOpen && (
        <div
          className={`absolute z-10 w-full dark:bg-dark ${
            menuTop ? '-mt-48' : 'mt-1'
          } bg-white border border-gray-200 rounded-md shadow-lg max-h-60 overflow-auto`}
        >
          {filteredOptions.map((option) => (
            <div
              key={option.value}
              className={`p-2 cursor-pointer hover:bg-gray-100 dark:text-white dark:hover:text-black text-black ${
                isMulti && Array.isArray(value)
                  ? value.some((v) => v.value === option.value)
                    ? 'bg-blue-100'
                    : ''
                  : option.label === selectedItem
                  ? 'bg-blue-100 dark:bg-primary'
                  : ''
              }`}
              onClick={() => handleOptionClick(option)}
            >
              {option.label}
            </div>
          ))}
          {filteredOptions.length === 0 && (
            <div className="p-2 text-gray-400">No options found</div>
          )}
        </div>
      )}
      {error && <p className="mt-1 text-sm text-red-500">{error}</p>}
    </div>
  );
};
