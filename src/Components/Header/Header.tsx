import React, { JSX, ReactNode } from 'react';
import styles from './Header.module.scss';
import clsx from 'clsx';


/**
 * TODO:
 * Performance optimization for:
 * - Rendering
 * - Algorythm
 * - Accessibility
 */
export type HeaderProps = {
  children: ReactNode;
  className?: string;
  level?: 1 | 2 | 3 | 4 | 5 | 6 | 7;
};

const Header = ({ children, className, level = 1 }: HeaderProps) => {
  const Tag = level === 7 ? 'p' : (`h${level}` as keyof JSX.IntrinsicElements);
  const headerClassName = clsx(
    styles.header,
    className,
    level === 7 ? styles.h7 : styles[`h${level}`]
  );
  
  
  return <Tag className={headerClassName}>{children}</Tag>;
};

export default Header;
