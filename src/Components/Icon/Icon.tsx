import React from "react";
import { iconList } from "../_export-helpers";
import styles from "./Icon.module.scss"; 


/**
 * TODO:
 * Performance optimization for:
 * - Rendering
 * - Algorythm
 * - Accessibility
 */
const Icon = ({
  name = "CaretCircleRight", // Default icon
  className,
  size = 24,
  color = "black",
}: IconProps) => {

  // No rendering if the name is not provided
  if (!name) {
    return;
  }

  // casting the icon by name
  const SvgIcon = iconList[name];

  return (
    <SvgIcon
      className={`${styles.icon} ${className || ""}`}
      width={size}
      height={size}
      fill={color}
      role="img"
      aria-label={`${name} icon`}
    />
  );
};


export type IconProps = {
  name?: keyof typeof iconList;
  className?: string;
  size?: number;
  color?: string;
};

export default Icon;
