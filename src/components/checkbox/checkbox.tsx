import { FC } from "react";

import { useCheckbox } from "@components/checkbox/checkbox.hook";
import { TCheckbox } from "@components/checkbox/checkbox.types";
import "@components/checkbox/checkbox.css";

export const Checkbox: FC<TCheckbox> = (props: TCheckbox) => {
  const { onChange, size = "md", disabled } = props;
  const { isChecked, setIsChecked, sizes, iconSizes } = useCheckbox(props);

  return (
    <>
      <div className="inline-flex items-center">
        <label
          className="relative flex cursor-pointer items-center rounded-full p-3"
          data-ripple-dark="true"
        >
          <input
            checked={isChecked}
            onChange={(e) => {
              setIsChecked(e.target.checked);
              onChange(e.target.checked);
            }}
            disabled={disabled}
            type="checkbox"
            className={`checkbox before:content[""] peer ${sizes[size]} ${
              disabled ? "cursor-not-allowed" : "cursor-pointer"
            }`}
          />
          <div className="pointer-events-none absolute top-2/4 left-2/4 -translate-y-2/4 -translate-x-2/4 text-white opacity-0 transition-opacity peer-checked:opacity-100">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className={iconSizes[size]}
              viewBox="0 0 20 20"
              fill="currentColor"
              stroke="currentColor"
              strokeWidth="1"
            >
              <path
                fillRule="evenodd"
                d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                clipRule="evenodd"
              ></path>
            </svg>
          </div>
        </label>
      </div>
    </>
  );
};
