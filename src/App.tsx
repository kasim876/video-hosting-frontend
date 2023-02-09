import React, {FC} from 'react';
import {BrowserRouter} from 'react-router-dom';

import Layout from '@components/layout';

import './styles/App.scss';

const App: FC = () => {
  return (
    <BrowserRouter>
      <Layout />
    </BrowserRouter>
  );
};

export default App;
