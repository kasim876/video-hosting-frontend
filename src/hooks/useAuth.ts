import {TypedUseSelectorHook, useSelector} from 'react-redux';

import {RootState} from '@store/reducer';

export const useAuth = () => {
  const useTypedSelector: TypedUseSelectorHook<RootState> = useSelector;

  return useTypedSelector(state => state.user);
};
