import { ReactNode } from 'react';
import clsx from 'clsx';
import styles from './Button.module.css';

const Button = ({ children, className, variant = 'primary', icon, size = 'medium' }: ButtonProps) => {
  return (
      <button className={clsx(
          styles.btn, 
          className, 
          variant === 'primary' && styles.primary,
          size === 'small' && styles.small,
          size === 'medium' && styles.medium, 
          size === 'large' && styles.large
      )}>
          {icon && <span className={styles.icon}>{icon}</span>}
          {children}
      </button>
  );
};

export type ButtonProps = {
  children: ReactNode;
  className?: string;
  variant?: 'primary' | 'secondary';
  icon?: ReactNode; 
  size?: 'small' | 'medium' | 'large';  

};

export default Button;
