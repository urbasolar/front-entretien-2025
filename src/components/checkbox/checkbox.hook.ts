import { useEffect, useState } from "react";

import { TCheckbox } from "@components/checkbox/checkbox.types";
import { FormikContextType, useFormikContext } from "formik";

export const useCheckbox = (props: TCheckbox) => {
  const { field, onChange, defaultChecked } = props;
  const [isChecked, setIsChecked] = useState(defaultChecked ?? false);
  const formikContext: FormikContextType<{ [k: string]: string }> | null =
    useFormikContext();

  const sizes = {
    sm: "h-4 w-4",
    md: "h-5 w-5",
    lg: "h-6 w-6",
  };
  const iconSizes = {
    sm: "h-2.5 w-2.5",
    md: "h-3.5 w-3.5",
    lg: "h-4 w-4",
  };

  useEffect(() => {
    if (field && field.value) {
      setIsChecked(field.value[field.name]);
    }
  }, [field]);

  /**
   * handleOnChange is a function that sets the value of the input and updates the formik's field value
   * if the field prop is passed from Field component
   * @param value - The value of the input
   */
  const handleOnChange = (valueChanged: boolean) => {
    setIsChecked(valueChanged);
    onChange(valueChanged);
    if (field) {
      formikContext?.setFieldValue(field.name, valueChanged);
    }
  };

  return {
    isChecked,
    setIsChecked,
    handleOnChange,
    sizes,
    iconSizes,
  };
};
