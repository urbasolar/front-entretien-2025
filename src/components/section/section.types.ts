import { IconDefinition } from "@fortawesome/pro-regular-svg-icons";
import { FontAwesomeIconProps } from "@fortawesome/react-fontawesome";

export type TSection = {
  children: React.ReactNode;
  title?: string;
  icon?: {
    icon: IconDefinition;
    color?: FontAwesomeIconProps["color"];
    size?: FontAwesomeIconProps["size"];
  };
  headerAction?: React.ReactNode;
  canBeClosed?: boolean;
  onClick?: () => void;
  className?: string;
  childClassName?: string;
};
