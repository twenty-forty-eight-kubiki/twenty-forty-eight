import AppRouter from './router/AppRouter';
import { fetchUser } from './store/auth-actions';
import { useAppDispatch, useAppSelector } from './hooks/store';
import { useEffect } from 'react';
import { getAuthCheckedStatus } from './store/selectors';
import Loader from './components/Loader/Loader';

const App = () => {
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(fetchUser());
  }, []);
  const isAuthChecked = useAppSelector(getAuthCheckedStatus);

  if (!isAuthChecked) {
    return <Loader />;
  }

  return <AppRouter />;
};

export default App;
