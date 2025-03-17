import { IconDefinition } from "@fortawesome/pro-regular-svg-icons";
import { FontAwesomeIconProps } from "@fortawesome/react-fontawesome";
import { MouseEvent } from "react";

export type TButton = {
  text: string;
  onClick: (event: MouseEvent<HTMLButtonElement, MouseEvent>) => void;
  isDisabled?: boolean;
  className?: string;
  icon?: {
    icon: IconDefinition;
    color?: FontAwesomeIconProps["color"];
    size?: FontAwesomeIconProps["size"];
  };
  variant?: "primary" | "white" | "success" | "warning" | "danger";
  size?: 'xs' | 's' | 'sm' | 'md' | 'lg' | 'full';
} & React.ButtonHTMLAttributes<HTMLButtonElement>;
