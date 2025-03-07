import { ReactNode } from 'react';
import clsx from 'clsx';
import styles from './Button.module.scss';


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
  size = 'medium'
}: ButtonProps) => {

  const blockClass    = block ? styles.block : ''; // Assign block class if button is a block
  let btnVariantClass = '';
  let btnSizeClass    = '';

  switch(variant) { // Compute the right variant styling
    case 'primary': btnVariantClass = styles.primary; break;
    case 'secondary': btnVariantClass = styles.secondary; break;
    case 'tertiary': btnVariantClass = styles.tertiary; break;
  }

  switch(size) {  // Compute the right size styling
    case 'small': btnSizeClass = styles.small; break;
    case 'medium': btnSizeClass = styles.medium; break;
    case 'large': btnSizeClass = styles.large; break;
  }

  // Combine all classes into 1
  const btnClassName = `btn ${blockClass} ${btnVariantClass} ${btnSizeClass} ${className}`;  

  return (
    <button className={clsx(styles.btn, btnClassName, variant === 'primary' && styles.primary)}>
      {icon && <span className={styles.icon}>{icon}</span>} {/* Render icon as a ReactNode */}
      {children}
    </button>
  );
};

export type ButtonProps = {
  children: ReactNode;
  className?: string,
  variant?: 'primary' | 'secondary' | 'tertiary',
  block?: boolean
  icon?: ReactNode; //  Icon is now a ReactNode, so it can accept strings or React elements
  size?: 'small' | 'medium' | 'large';  
};

export default Button;
