import {AiFillLike} from 'react-icons/ai';
import {HiFire, HiHome} from 'react-icons/hi';

import {IMenuItem} from '@components/layout/sidebar/menu/menu.interface';

import avatar2 from '@assets/images/avatar2.jpg';
import avatar3 from '@assets/images/avatar3.jpg';
import avatar4 from '@assets/images/avatar4.jpg';
import avatar from '@assets/images/avatar.jpg';

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
    link: '/likes',
    title: 'Понравившиеся',
    icon: AiFillLike,
  },
];

export const subscriptions: IMenuItem[] = [
  {
    link: '/chanel/kasim876',
    title: 'kasim876',
    image: avatar,
  },
  {
    link: '/chanel/НИКИТОС',
    title: 'НИКИТОС',
    image: avatar2,
  },
  {
    link: '/chanel/ЛИТВИН',
    title: 'ЛИТВИН',
    image: avatar3,
  },
  {
    link: '/chanel/itpedia',
    title: 'itpedia',
    image: avatar4,
  },
];
