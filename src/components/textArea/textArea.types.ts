import { FieldProps } from "formik";

export type TTextArea = {
  label?: string;
  field?: FieldProps["field"]; // Field object from Formik Field component
  height?: string;
} & React.TextareaHTMLAttributes<HTMLTextAreaElement>;

export type TTextAreaHook = {
  value: string;
  handleOnChange: (value: string) => void;
};
