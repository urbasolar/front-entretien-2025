import {
  faEllipsis,
  faEllipsisVertical,
} from '@fortawesome/pro-regular-svg-icons';
import { FC } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { useDropDown } from '@components/dropDown/dropDown.hook';
import { TDropDown } from '@components/dropDown/dropDown.types';
import { ROW } from '@components/dropDown/dropDown.constants';

export const DrowDown: FC<TDropDown> = (props: TDropDown) => {
  const { children, direction = ROW, position = 'br' } = props;
  const { isOpen, setIsOpen, dropwDownPosition } = useDropDown();
  return (
    <div className="relative cursor-pointer">
      <div onClick={() => setIsOpen(!isOpen)}>
        <FontAwesomeIcon
          icon={direction === ROW ? faEllipsis : faEllipsisVertical}
          color="white"
        />
      </div>
      <div
        className={`${
          isOpen ? 'w-48 h-20 p-m' : 'w-0 h-0 display-none'
        } rounded-lg transition-all duration-300  bg-dark-lighter absolute z-50 ${
          dropwDownPosition[position]
        }`}
      >
        {isOpen && children}
      </div>
    </div>
  );
};

export default DrowDown;
