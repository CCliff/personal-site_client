import { ReactElement } from 'react';
import Link from 'next/link';

import styles from './NavItem.module.scss';

interface NavItem {
  href: string;
  text: string;
}

export default function NavItem({
  href,
  text,
}: NavItem): ReactElement {
  return (
    <div className={styles.container}>
      <Link href={href}>
        <a className={styles.link}>{text}</a>
      </Link>
    </div>
  );
}
