import {GetStaticProps, NextPage} from 'next';
import {FC} from 'react';

import Layout from '@/components/layout/Layout';
import Trending from '@/components/screens/trending/Trending';
import {ITrending} from '@/components/screens/trending/trending.interface';

import VideoService from '@/services/video.service';

const TrendingPage: NextPage<ITrending> = props => {
  return <Trending {...props} />;
};

export const getStaticProps: GetStaticProps = async () => {
  const topVideos = await VideoService.getMostPopular();

  try {
    return {
      props: {
        topVideos: topVideos,
      } as ITrending,
    };
  } catch (error) {
    return {
      props: {
        topVideos: [],
      } as ITrending,
    };
  }
};

export default TrendingPage;
