import Head from 'next/head';
import {FC, PropsWithChildren} from 'react';

import getTitle from '@/utils/get-title';

import {IMeta} from './meta.interface';

const Meta: FC<PropsWithChildren<IMeta>> = ({title, descr, children}) => {
  return (
    <>
      <Head>
        <title>{getTitle(title)}</title>
        {descr ? (
          <>
            <meta
              name="description"
              content={descr}
            />
            <meta
              name="og:title"
              content={getTitle(title)}
            />
            <meta
              name="og:description"
              content={descr}
            />
          </>
        ) : (
          <meta
            name="robots"
            content="noindex, nofollow"
          />
        )}
      </Head>
      {children}
    </>
  );
};

export default Meta;
