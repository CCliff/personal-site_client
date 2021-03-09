import { ReactElement } from 'react';

import Layout from '@/global/layout/Layout';
import Head from 'next/head';

export default function Home(): ReactElement {
  return (
    <Layout>
      <Head>
        <title>Testing</title>
      </Head>
    </Layout>
  );
}
