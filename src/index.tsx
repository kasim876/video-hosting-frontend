import ReactDOM from 'react-dom/client';
import {Provider} from 'react-redux';
import {PersistGate} from 'redux-persist/integration/react';

import {persistor, store} from '@/store/store';

import App from './App';

const root = ReactDOM.createRoot(document.getElementById('appMountPoint') as HTMLElement);

root.render(
  <Provider store={store}>
    <PersistGate
      persistor={persistor}
      loading={null}
    >
      <App />
    </PersistGate>
  </Provider>,
);
