import { FieldProps } from "formik";

export type TInput = {
  inputSize?: "sm" | "md" | "lg" | "full";
  label?: string;
  field?: FieldProps["field"]; // Field object from Formik Field component
  currentValue?: (value: string | number) => void;
} & React.InputHTMLAttributes<HTMLInputElement>;

export type TInputHook = {
  value: string | number | readonly string[] | undefined;
  handleOnChange: (value: string | number) => void;
};
