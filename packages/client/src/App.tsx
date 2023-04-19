import AppRouter from './router/AppRouter';
import { fetchUser } from './store/auth-actions';
import { useAppDispatch, useAppSelector } from './hooks/store';
import React, { useEffect, useState } from 'react';
import { getAuthCheckedStatus } from './store/selectors';
import Loader from './components/Loader/Loader';

const App = () => {
  const dispatch = useAppDispatch();
  const [domLoaded, setDomLoaded] = useState(false);

  useEffect(() => {
    setDomLoaded(true);
  }, []);

  useEffect(() => {
    dispatch(fetchUser());
  }, []);
  const isAuthChecked = useAppSelector(getAuthCheckedStatus);

  return <>{domLoaded && (isAuthChecked ? <AppRouter /> : <Loader />)}</>;
};

export default App;
