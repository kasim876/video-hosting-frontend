import {AiOutlineBulb} from 'react-icons/ai';
import {BiNews} from 'react-icons/bi';
import {GiLargeDress} from 'react-icons/gi';
import {HiFire, HiHome, HiStar} from 'react-icons/hi';
import {IoLogoGameControllerB, IoMdMusicalNote} from 'react-icons/io';
import {MdSportsSoccer} from 'react-icons/md';

import {IMenuItem} from './menu.interface';

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

export const categories: IMenuItem[] = [
  {
    link: '/music',
    title: 'Музыка',
    icon: IoMdMusicalNote,
  },
  {
    link: '/games',
    title: 'Видеоигры',
    icon: IoLogoGameControllerB,
  },
  {
    link: '/news',
    title: 'Новости',
    icon: BiNews,
  },
  {
    link: '/sport',
    title: 'Спорт',
    icon: MdSportsSoccer,
  },
  {
    link: '/learning',
    title: 'Обучение',
    icon: AiOutlineBulb,
  },
  {
    link: '/beauty',
    title: 'Мода и красота',
    icon: GiLargeDress,
  },
];
