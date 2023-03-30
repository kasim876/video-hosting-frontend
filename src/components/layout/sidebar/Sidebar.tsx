import Image from 'next/image';
import Link from 'next/link';
import {FC} from 'react';

import useAuth from '@/hooks/useAuth';

import logo from '@/assets/images/logo.svg';

import classes from './Sidebar.module.scss';
import Menu from './menu/Menu';
import {categories, menu} from './menu/menu.data';

const Sidebar: FC = () => {
  const {user} = useAuth();

  return (
    <aside className={classes.root}>
      <Link href="/">
        <Image
          src={logo}
          width={215}
          height={43}
          alt="rutube"
        />
      </Link>
      <Menu
        list={menu}
        title="меню"
      />
      <Menu
        list={categories}
        title="категории"
      />
    </aside>
  );
};

export default Sidebar;
