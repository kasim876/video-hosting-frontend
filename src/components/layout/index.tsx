import React, {FC, Fragment, PropsWithChildren} from 'react';

import AppRouter from '@components/AppRouter';
import Header from '@components/layout/header';
import Sidebar from '@components/layout/sidebar';

import classes from './Layout.module.scss';

const Layout: FC<PropsWithChildren> = ({children}) => {
  return (
    <Fragment>
      <Header />
      <div>
        <Sidebar />
        <main className={classes.main}>
          <AppRouter />
        </main>
      </div>
    </Fragment>
  );
};

export default Layout;
