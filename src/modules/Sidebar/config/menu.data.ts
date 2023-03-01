import {HiFire, HiHome, HiStar} from 'react-icons/hi';

import {IMenuItem} from '../types/menu.interface';

export const menu: IMenuItem[] = [
  {
    link: '/',
    title: 'Главная',
    icon: HiHome,
  },
  {
    link: '/trending',
    title: 'В тренде',
    icon: HiFire,
  },
  {
    link: '/my-channel',
    title: 'Мой канал',
    icon: HiStar,
  },
];

export const subscriptions: IMenuItem[] = [
  {
    link: '/channel/2',
    title: 'ЛИТВИН',
    image: '/avatar/avatar_1.jpg',
  },
  {
    link: '/channel/3',
    title: 'Дима Гордей',
    image: '/avatar/avatar_2.jpg',
  },
  {
    link: '/channel/4',
    title: 'itpedia',
    image: '/avatar/avatar_3.jpg',
  },
  {
    link: '/channel/5',
    title: 'НИКИТОС',
    image: '/avatar/avatar_4.jpg',
  },
];
