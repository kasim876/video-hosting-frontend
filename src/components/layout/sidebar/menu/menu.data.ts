import {AiFillStar} from 'react-icons/ai';
import {HiFire, HiHome} from 'react-icons/hi';

import {IMenuItem} from '@components/layout/sidebar/menu/menu.interface';

import avatar2 from '@assets/images/avatar2.jpg';
import avatar3 from '@assets/images/avatar3.jpg';
import avatar4 from '@assets/images/avatar4.jpg';

import {HOME_ROUTE} from '@utils/consts';

export const menu: IMenuItem[] = [
  {
    link: HOME_ROUTE,
    title: 'Главная',
    icon: HiHome,
  },
  {
    link: '/trending',
    title: 'В тренде',
    icon: HiFire,
  },
  {
    link: '/channel',
    title: 'Мой канал',
    icon: AiFillStar,
  },
];
/* TODO: заменить массив на данные с сервера */
export const subscriptions: IMenuItem[] = [
  {
    link: '/channel/НИКИТОС',
    title: 'НИКИТОС',
    image: avatar2,
  },
  {
    link: '/channel/ЛИТВИН',
    title: 'ЛИТВИН',
    image: avatar3,
  },
  {
    link: '/channel/itpedia',
    title: 'itpedia',
    image: avatar4,
  },
];
