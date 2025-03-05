import { ReactNode } from 'react';
import styles from './Button.module.scss';
import clsx from 'clsx';

const Button = ({ children, className, variant = 'primary', icon }: ButtonProps) => {
  return (
    <button className={clsx(styles.btn, className, variant === 'primary' && styles.primary)}>
      {icon && <span className={styles.icon}>{icon}</span>} {/* Render icon as a ReactNode */}
      {children}
    </button>
  );
};

export type ButtonProps = {
  children: ReactNode;
  className?: string;
  variant?: 'primary' | 'secondary';
  icon?: ReactNode; //  Icon is now a ReactNode, so it can accept strings or React elements
};

export default Button;
