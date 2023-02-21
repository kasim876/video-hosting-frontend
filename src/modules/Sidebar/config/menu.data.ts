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
    title: 'Дима Гордей',
    image: '/avatar.jpg',
  },
  {
    link: '/channel/3',
    title: 'НИКИТОС',
    image: '/avatar2.jpg',
  },
  {
    link: '/channel/4',
    title: 'ЛИТВИН',
    image: '/avatar3.jpg',
  },
  {
    link: '/channel/5',
    title: 'itpedia',
    image: '/avatar4.jpg',
  },
];
