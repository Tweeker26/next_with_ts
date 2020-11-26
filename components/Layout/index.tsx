import React from 'react';
import Navigation from 'components/Navigation';

import styles from './layout.module.css';

interface LayoutProps {
  children: JSX.Element | JSX.Element[];
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <div className={styles.container}>
      <Navigation />

      <main>{children}</main>
    </div>
  );
};

export default Layout;
