import { FC } from 'react';

import { TSwitch } from '@components/switch/switch.types';
import { useSwitch } from './switch.hook';

export const Switch: FC<TSwitch> = (props: TSwitch) => {
  const {
    isChecked,
    handleCheckboxChange,
    leftTextComponent,
    rightTextComponent,
    style,
  } = useSwitch(props);
  return (
    <label className="relative inline-flex cursor-pointer select-none items-center">
      <input
        type="checkbox"
        checked={isChecked}
        onChange={handleCheckboxChange}
        className="sr-only"
      />
      {leftTextComponent.text && (
        <span
          className={`flex items-center ${leftTextComponent.size} ${leftTextComponent.color} font-medium`}
        >
          {leftTextComponent.text}
        </span>
      )}
      <span
        className={`mx-4 flex ${style?.switchContainer?.height} ${
          style?.switchContainer?.width
        } items-center rounded-full p-1 duration-200 ${
          isChecked ? 'bg-success' : 'bg-dark border-white border-solid border'
        }`}
      >
        <span
          className={`${style?.switchDot?.height} ${
            style?.switchDot?.width
          } rounded-full bg-white duration-200 ${
            isChecked ? style?.switchDot?.translate : ''
          }`}
        ></span>
      </span>
      {rightTextComponent.text && (
        <span
          className={`flex items-center ${rightTextComponent.size} ${rightTextComponent.color} font-medium text-white`}
        >
          {rightTextComponent.text}
        </span>
      )}
    </label>
  );
};
