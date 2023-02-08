import React, {FC} from 'react';
import {Route, Routes} from 'react-router-dom';

import {ROUTES} from '../routes';

const AppRouter: FC = () => {
  return (
    <div>
      <Routes>
        {ROUTES.map(({path, element}) => (
          <Route
            key={path}
            path={path}
            element={element}
          />
        ))}
      </Routes>
    </div>
  );
};

export default AppRouter;
