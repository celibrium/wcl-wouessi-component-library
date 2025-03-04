import React, { ReactNode } from 'react';
import styles from './Header.module.scss';
import clsx from 'clsx';

export type HeaderProps = {
  children: ReactNode;
  className?: string;
  level?: 1 | 2 | 3 | 4;
};

const Header = ({ children, className, level = 1 }: HeaderProps) => {
  const headerClassName = clsx(
    styles.header,
    'header',
    className,
    level === 1 && styles.primary
  );
  
  return <header className={headerClassName}>{children}</header>;
};

export default Header;
