import { ReactNode } from 'react';
import styles from './Button.module.scss';
import clsx from 'clsx';
import SpeakerIcon from '../../assets/Speaker.svg?react'; 


/**
 * TODO:
 * Performance optimization for:
 * - Rendering
 * - Algorythm
 * - Accessibility
 */
const Button = ({ 
  children, 
  icon, 
  className = '', 
  variant = 'primary', 
  block = false,
  as = 'button' 
}: ButtonProps) => {
  
  const isIconButton = as === 'button icon';

  const btnClassName = clsx(
    isIconButton ? styles.iconOnly : styles.btn, 
    className,
    {
      [styles.primary]: !isIconButton && variant === 'primary',
      [styles.secondary]: !isIconButton && variant === 'secondary',
      [styles.tertiary]: !isIconButton && variant === 'tertiary',
      [styles.block]: !isIconButton && block
    }
  );

  return (
    <button className={btnClassName}>
      {isIconButton ? <SpeakerIcon className={styles.largeIcon} /> : (
        <>
          {icon && <span className={styles.icon}>{icon}</span>}
          {children}
        </>
      )}
    </button>
  );
};

export type ButtonProps = {
  children?: ReactNode;
  className?: string;
  variant?: 'primary' | 'secondary' | 'tertiary';
  block?: boolean;
  icon?: ReactNode;
  as?: 'button' | 'button icon';
};

export default Button;