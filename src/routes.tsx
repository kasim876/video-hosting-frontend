import {HOME_ROUTE, TRENDING_ROUTE} from '@/consts';
import {HomePage} from '@/pages/HomePage/HomePage';

import {TrendingPage} from './pages/TrendingPage/TrendingPage';

export const ROUTES = [
  {
    path: HOME_ROUTE,
    element: <HomePage />,
  },
  {
    path: TRENDING_ROUTE,
    element: <TrendingPage />,
  },
];
