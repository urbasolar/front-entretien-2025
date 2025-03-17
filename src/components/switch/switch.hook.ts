import { useState, useEffect } from "react";
import { FormikContextType, useFormikContext } from "formik";

import {
  TSwitch,
  TSwitchHook,
  TSwitchText,
} from "@components/switch/switch.types";

export const useSwitch = (props: TSwitch): TSwitchHook => {
  const { isActive, leftText, rightText, styles, field } = props;
  const [isChecked, setIsChecked] = useState(false);

  const formikContext: FormikContextType<{ [k: string]: boolean }> | null =
    useFormikContext<{ [k: string]: boolean }>();

  const handleCheckboxChange = () => {
    if (isActive) {
      isActive(!isChecked);
    }
    if (field) {
      formikContext?.setFieldValue(field.name, !isChecked);
    }
    setIsChecked(!isChecked);
  };

  const leftTextComponent: TSwitchText = {};
  if (typeof leftText === "object") {
    leftTextComponent.text = leftText.text;
    leftTextComponent.color = leftText.color ?? "text-white";
    leftTextComponent.size = leftText.size ?? "text-sm";
  } else {
    leftTextComponent.text = leftText ?? undefined;
  }

  const rightTextComponent: TSwitchText = {};
  if (typeof rightText === "object") {
    rightTextComponent.text = rightText.text;
    rightTextComponent.color = rightText.color ?? "text-white";
    rightTextComponent.size = rightText.size ?? "text-sm";
  } else {
    rightTextComponent.text = rightText ?? undefined;
  }

  const style = {
    switchContainer: {
      width: styles?.switchContainer?.width ?? "w-[45px]",
      height: styles?.switchContainer?.height ?? "h-6",
    },
    switchDot: {
      width: styles?.switchDot?.width ?? "w-4",
      height: styles?.switchDot?.height ?? "h-4",
      translate: styles?.switchDot?.translate ?? "translate-x-[24px]",
    },
  };

  useEffect(() => {
    if (field && field.value) {
      setIsChecked(field.value);
    }
  }, [field]);

  return {
    isChecked,
    handleCheckboxChange,
    leftTextComponent,
    rightTextComponent,
    style,
  };
};
