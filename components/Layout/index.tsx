import React from 'react'
import User from 'components/User'

import styles from './layout.module.css'

interface LayoutProps {
  children: JSX.Element[];
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <div className={styles.container}>
      <User />

      <main>{children}</main>
    </div>
  )
}

export default Layout
