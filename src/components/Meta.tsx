import {NextPage} from 'next';
import Head from 'next/head';

import getTitle from '@/utils/get-title';

interface IHead {
  title: string;
  description?: string;
}

const Meta: NextPage<IHead> = ({title, description}) => {
  return (
    <Head>
      <meta
        name="viewport"
        content="width=device-width, initial-scale=1"
      />
      <link
        rel="icon"
        href="/favicon.ico"
      />
      <title>{getTitle(title)}</title>
      {description ? (
        <meta
          name="description"
          content={description}
        />
      ) : (
        <meta
          name="robots"
          content="noindex, nofollow"
        />
      )}
    </Head>
  );
};

export default Meta;
