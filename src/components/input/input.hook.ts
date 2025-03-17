import { useState, useEffect } from "react";
import { useFormikContext, FormikContextType } from "formik";

import { TInput, TInputHook } from "@components/input/input.types";

/**
 * useInput hook is used to handle input's value and onChange event
 * @param props.field - Field object from Formik
 * @param props.currentValue - Callback function that returns the current value of the input
 * @returns {TInputHook} An object that contains the current value and the onChange event handler
 */

export const useInput = (props: TInput): TInputHook => {
  const { field, currentValue, value: defaultValue } = props;
  const [value, setValue] = useState<
    string | number | readonly string[] | undefined
  >(defaultValue);
  const formikContext: FormikContextType<{ my_input: string | null }> | null =
    useFormikContext();

  useEffect(() => {
    if (field && field.value) {
      setValue(field.value[field.name]);
    }
  }, [field]);

  /**
   * handleOnChange is a function that sets the value of the input and updates the formik's field value
   * if the field prop is passed from Field component
   * @param valueChanged - The value of the input
   */
  const handleOnChange = (valueChanged: string | number) => {
    setValue(valueChanged);
    if (field) {
      formikContext?.setFieldValue(field.name, valueChanged);
    }
    if (currentValue) {
      currentValue(valueChanged);
    }
  };

  return {
    value,
    handleOnChange,
  };
};
