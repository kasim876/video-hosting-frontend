import React, {FC} from 'react';
import {BrowserRouter, Route, Routes} from 'react-router-dom';

import '@assets/styles/App.scss';

import {ROUTES} from './routes';

const App: FC = () => {
  return (
    <BrowserRouter>
      <main>
        <Routes>
          {ROUTES.map(({path, element}) => (
            <Route
              key={path}
              path={path}
              element={element}
            />
          ))}
        </Routes>
      </main>
    </BrowserRouter>
  );
};

export default App;
