import { FieldProps } from "formik";

export type TSwitchText = {
  text?: string;
  color?: string;
  size?: string;
};

export type TSwitch = {
  isActive?: (isChecked: boolean) => void;
  leftText?: TSwitchText | string;
  rightText?: TSwitchText | string;
  styles?: {
    switchContainer?: {
      width?: string;
      height?: string;
    };
    switchDot?: {
      width?: string;
      height?: string;
      translate?: string;
    };
  };
  field?: FieldProps["field"];
};

export type TSwitchHook = {
  isChecked: boolean;
  handleCheckboxChange: () => void;
  leftTextComponent: TSwitchText;
  rightTextComponent: TSwitchText;
  style: TSwitch["styles"];
};
