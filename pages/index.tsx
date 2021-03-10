import { ReactElement } from 'react';

import Default from '@/global/layout/default/Default';
import Head from 'next/head';

export default function Home(): ReactElement {
  return (
    <Default>
      <Head>
        <title>Testing</title>
      </Head>
    </Default>
  );
}
