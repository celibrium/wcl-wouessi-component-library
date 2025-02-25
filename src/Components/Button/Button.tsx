import { ReactNode } from 'react';
import styles from './Button.module.scss';
import clsx from 'clsx';

const Button = ({ children, className, variant = 'primary' }: ButtonProps) => {
  const btnClassName = `btn ${className}`;
  return (
    <button className={clsx(styles.btn, btnClassName, variant == 'primary' && styles.primary)}>{ children }</button>
  );
};

export type ButtonProps = {
  children: ReactNode;
  className?: string,
  variant?: 'primary' | 'secondary'
};

export default Button;