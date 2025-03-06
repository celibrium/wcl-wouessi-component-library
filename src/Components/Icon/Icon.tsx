import React from "react";
import styles from "./Icon.module.scss"; 
// Import all SVGs from assets
import CaretCircleRight from "../../assets/CaretCircleRight.svg?react";
import ChatsTeardrop from "../../assets/ChatsTeardrop.svg?react";
import Megaphone from "../../assets/Megaphone.svg?react";
import SpeakerHigh from "../../assets/SpeakerHigh.svg?react";


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
  const SvgIcon = iconsList[name];

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

// List of icons to be rendered as svg
const iconsList = {
  CaretCircleRight,
  ChatsTeardrop,
  Megaphone,
  SpeakerHigh,
};

export type IconProps = {
  name?: keyof typeof iconsList;
  className?: string;
  size?: number;
  color?: string;
};

export default Icon;
