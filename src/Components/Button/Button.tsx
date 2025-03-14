import { ReactNode } from 'react';
// import clsx from 'clsx'; 
import { Icon } from '../Icon';
import { iconList } from '../_export-helpers';
import styles from './Button.module.scss';


/**
 * TODO:
 * Performance optimization for:
 * - Rendering
 * - Algorythm
 * - Accessibility
 */


/**
 * RULES
 * ------------
 * 1) <Icon /> component is optional, but is rendered automatically if as === 'icon button' 
 * 
 */
const Button = ({ 
  children, 
  hasIcon, 
  className = '', 
  variant = 'primary', 
  isBlock = false,
  as = 'button',
  size = 'medium',
  href
}: ButtonProps) => {

  const blockClass              = isBlock ? styles.block : ''; // Assign block class if button is a block
  const btnIconTransformClass   = as === 'icon button' ? styles.btnIcon : '';
  let btnVariantClass           = '';
  let btnSizeClass              = '';

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
  const btnClassName = `btn 
                        ${blockClass} 
                        ${btnVariantClass} 
                        ${btnSizeClass} 
                        ${btnIconTransformClass} 
                        ${className}`;  
                        

  // // RENDER ANCHOR HERE 
  if (as === 'link') {
    return <a href={href} className={btnClassName}>{children}</a>;
  }
  // }

  return (
    <button className={btnClassName}>
      {children}
      {(hasIcon || as === 'icon button') && <Icon name={hasIcon} />}
    </button>
  );
};

export type ButtonProps = {
  children: ReactNode;
  className?: string;
  variant?: 'primary' | 'secondary' | 'tertiary';
  isBlock?: boolean; 
  as?: 'button' | 'icon button' | 'link';  // Added "link" option
  hasIcon?: keyof typeof iconList;
  size?: 'small' | 'medium' | 'large';  
  href?: string; // String for links
};


export default Button;