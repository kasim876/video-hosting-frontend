import type {AppProps} from 'next/app';
import {Provider} from 'react-redux';
import {PersistGate} from 'redux-persist/integration/react';

import store, {persistor} from '@/store/store';

import '@/styles/App.scss';

export default function App({Component, pageProps}: AppProps) {
  return (
    <Provider store={store}>
      <PersistGate
        persistor={persistor}
        loading={null}
      >
        <Component {...pageProps} />
      </PersistGate>
    </Provider>
  );
}
