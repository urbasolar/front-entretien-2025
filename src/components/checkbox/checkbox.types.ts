import { FieldProps } from "formik";

export type TCheckbox = {
  onChange: (e: boolean) => void;
  size?: "sm" | "md" | "lg";
  field?: FieldProps["field"]; // Field object from Formik Field component
} & Omit<React.InputHTMLAttributes<HTMLInputElement>, "onChange" | "size">;
