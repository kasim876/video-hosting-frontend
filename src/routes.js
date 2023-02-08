import Home from '@pages/Home';
import Uploader from '@pages/Uploader';
import Video from '@pages/Video';
import {HOME_ROUTE, UPLOAD_ROUTE, VIDEO_ROUTE} from '@utils/consts';

export const ROUTES = [
  {
    path: HOME_ROUTE,
    element: <Home />,
  },
  {
    path: VIDEO_ROUTE + '/:id',
    element: <Video />,
  },
  {
    path: UPLOAD_ROUTE,
    element: <Uploader />,
  },
];
