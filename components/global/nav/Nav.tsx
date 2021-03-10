import { ReactElement } from 'react';
import NavItem from '@/global/nav/NavItem';
import styles from './Nav.module.scss';

export default function Nav(): ReactElement {
  return (
    <nav className={styles.container}>
      <NavItem
        href="test"
        text="Testing"
      />
    </nav>
  );
}
