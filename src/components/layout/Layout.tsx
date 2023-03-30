import {FC, PropsWithChildren} from 'react';

import Meta from '../seo/Meta';
import {IMeta} from '../seo/meta.interface';

import classes from './Layout.module.scss';
import Header from './header/Header';
import Sidebar from './sidebar/Sidebar';

const Layout: FC<PropsWithChildren<IMeta>> = ({title, descr, children}) => {
  return (
    <Meta
      title={title}
      descr={descr}
    >
      <main className={classes.main}>
        <Sidebar />
        <section className={classes.content}>
          <Header />
          <div className={classes.wrapper}>{children}</div>
        </section>
      </main>
    </Meta>
  );
};

export default Layout;
