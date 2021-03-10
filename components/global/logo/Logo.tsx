import { ReactElement } from 'react';
import Link from 'next/link';
import styles from './Logo.module.scss';

export default function Logo(): ReactElement {
  return (
    <Link href="/">
      <a className={styles.logoLink}>
        CC.com
      </a>
    </Link>
  );
}
