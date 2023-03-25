import {HOME_ROUTE, TRENDING_ROUTE, VIDEO_ROUTE} from '@/consts';
import {HomePage} from '@/pages/HomePage/HomePage';

import {TrendingPage} from './pages/TrendingPage/TrendingPage';
import VideoPage from './pages/VideoPage';

export const ROUTES = [
  {
    path: HOME_ROUTE,
    element: <HomePage />,
  },
  {
    path: TRENDING_ROUTE,
    element: <TrendingPage />,
  },
  {
    path: VIDEO_ROUTE + '/:id',
    element: <VideoPage />,
  },
];
