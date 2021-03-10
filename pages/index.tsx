import { ReactElement } from 'react';
import Default from '@/global/layout/default/Default';
import Head from 'next/head';
import StoryblokClient from '~/lib/StoryblokClient.tsx';

interface StoryblokResult {
  props: {
    story: Record<string, unknown>,
    preview: boolean,
  },
  revalidate: number
}

export async function getStaticProps(): Promise<StoryblokResult> {
  const slug = 'home';
  const params = { version: 'draft' };

  const { data } = await StoryblokClient.get(`cdn/stories/${slug}`, params);

  return {
    props: {
      story: data ? data.story : false,
      preview: true,
    },
    revalidate: 10,
  };
}

export default function Home(props): ReactElement {
  console.log(props);
  return (
    <Default>
      <Head>
        <title>Testing</title>
      </Head>
    </Default>
  );
}
