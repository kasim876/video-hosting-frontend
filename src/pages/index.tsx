import {shuffle} from '@funboxteam/diamonds';
import {GetStaticProps, NextPage} from 'next';

import Home from '@/components/screens/home/Home';
import {IHome} from '@/components/screens/home/home.interface';

import {IVideo} from '@/types/video.interface';

import VideoService from '@/services/video.service';

const HomePage: NextPage<IHome> = props => {
  return <Home {...props} />;
};

export const getStaticProps: GetStaticProps = async () => {
  const videos = await VideoService.getAll();
  const topVideos = await VideoService.getMostPopular();

  try {
    return {
      props: {
        videos: shuffle(videos),
        randomVideo: shuffle(videos.filter(video => video.id !== topVideos[0].id))[0],
        topVideo: topVideos[0],
      } as IHome,
    };
  } catch (error) {
    return {
      props: {
        videos: [],
        randomVideo: {} as IVideo,
        topVideo: {} as IVideo,
      } as IHome,
    };
  }
};

export default HomePage;
