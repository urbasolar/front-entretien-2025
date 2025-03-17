import type React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXmark } from '@fortawesome/pro-solid-svg-icons';

import type { TagProps } from './select.types';

export const Tag: React.FC<TagProps> = ({ option, onRemove }) => {
  return (
    <div className="inline-flex items-center bg-blue-100 text-blue-800 rounded-full px-2 py-1 text-sm mr-1 mb-1">
      {option.label}
      <button
        onClick={(e) => {
          e.stopPropagation();
          onRemove(option);
        }}
        className="ml-1 focus:outline-none"
        aria-label={`Remove ${option.label}`}
      >
        <FontAwesomeIcon icon={faXmark} />
      </button>
    </div>
  );
};
