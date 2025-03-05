import React from "react";
import styles from "./Icon.module.scss";

// Import all SVGs from assets
import CaretCircleRight from "../../assets/CaretCircleRight.svg?react";
import ChatsTeardrop from "../../assets/ChatsTeardrop.svg?react";
import Megaphone from "../../assets/Megaphone.svg?react";
import SpeakerHigh from "../../assets/SpeakerHigh.svg?react";

const icons = {
  CaretCircleRight,
  ChatsTeardrop,
  Megaphone,
  SpeakerHigh,
};

type IconProps = {
  name?: keyof typeof icons; // Make `name` optional
  className?: string;
  size?: number;
  color?: string;
};

const Icon: React.FC<IconProps> = ({
  name = "CaretCircleRight", // Default icon
  className,
  size = 24,
  color = "black",
}) => {
  const SvgIcon = icons[name] || CaretCircleRight; // Fallback to default

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

export default Icon;
