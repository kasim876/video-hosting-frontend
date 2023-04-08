import type {AppProps} from 'next/app';
import NextProgressBar from 'nextjs-progressbar';
import {QueryClient, QueryClientProvider} from 'react-query';
import {Provider} from 'react-redux';
import {PersistGate} from 'redux-persist/integration/react';

import store, {persistor} from '@/store/store';

import '@/styles/globals.scss';

const queryClient = new QueryClient();

export default function App({Component, pageProps}: AppProps) {
  return (
    <QueryClientProvider client={queryClient}>
      <Provider store={store}>
        <PersistGate
          persistor={persistor}
          loading={null}
        >
          <NextProgressBar
            height={2}
            color="#ff7652"
          />
          <Component {...pageProps} />
        </PersistGate>
      </Provider>
    </QueryClientProvider>
  );
}
