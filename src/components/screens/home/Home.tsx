import {FC} from 'react';

import Layout from '@/components/layout/Layout';
import Catalog from '@/components/shared/catalog/Catalog';
import Discover from '@/components/shared/discover/Discover';

import {IHome} from './home.interface';

const Home: FC<IHome> = ({randomVideo, topVideo, videos}) => {
  return (
    <Layout title="Главная">
      <Discover
        randomVideo={randomVideo}
        topVideo={topVideo}
      />
      <Catalog
        title="Рекомендации"
        videos={videos}
      />
    </Layout>
  );
};

export default Home;
