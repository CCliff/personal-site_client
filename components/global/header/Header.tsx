import { ReactElement } from 'react';
import Logo from '@/global/logo/Logo';
import Nav from '@/global/nav/Nav';
import styles from './Header.module.scss';

export default function Header(): ReactElement {
  return (
    <header className={styles.container}>
      <div className={styles.logoContainer}>
        <Logo />
      </div>
      <div className={styles.navContainer}>
        <Nav />
      </div>
    </header>
  );
}
