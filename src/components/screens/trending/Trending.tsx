import {FC} from 'react';

import Layout from '@/components/layout/Layout';
import Catalog from '@/components/shared/catalog/Catalog';

import {ITrending} from './trending.interface';

const Trending: FC<ITrending> = ({topVideos}) => {
  return (
    <Layout title="В тренде">
      <Catalog
        title="Рекомендации"
        videos={topVideos}
      />
    </Layout>
  );
};

export default Trending;
