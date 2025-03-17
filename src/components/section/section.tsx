import { FC } from 'react';

import { TSection } from '@components/section/section.types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXmark } from '@fortawesome/pro-solid-svg-icons';

export const Section: FC<TSection> = (props: TSection) => {
  const {
    title,
    children,
    icon,
    headerAction,
    canBeClosed,
    onClick,
    className,
    childClassName,
  } = props;
  return (
    <div
      className={`bg-dark-mid w-full h-full border-lg p-l text-white rounded-lg ${
        className ? className : ''
      }`}
    >
      {(title || headerAction || canBeClosed) && (
        <div className="border-b dark:border-dark-lighter border-neutral-grey pb-s border-solid flex">
          <div className="flex flex-1 gap-2">
            <div className="flex flex-1 gap-2">
              {icon && (
                <div className="flex items-center gap-3">
                  <FontAwesomeIcon
                    icon={icon.icon}
                    color={icon.color}
                    size={icon.size}
                  />
                </div>
              )}
              <p className="text-xl">{title}</p>
            </div>
            {canBeClosed && (
              <div className="self-center">
                <FontAwesomeIcon icon={faXmark} onClick={onClick} />
              </div>
            )}
          </div>
          {headerAction && <>{headerAction}</>}
        </div>
      )}
      <div className={childClassName}>{children}</div>
    </div>
  );
};
