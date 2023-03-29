import useAppSelector from './useAppSelector';

const useAuth = () => {
  return useAppSelector(state => state.auth);
};

export default useAuth;
