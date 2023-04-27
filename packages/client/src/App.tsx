import AppRouter from './router/AppRouter';
import { fetchUser } from './store/auth-actions';
import { useAppDispatch, useAppSelector } from './hooks/store';
import React, { useEffect, useState } from 'react';
import { getAuthCheckedStatus } from './store/selectors';
import Loader from './components/Loader/Loader';
import { useHistory } from 'react-router-dom';
import { OauthRequestData } from './types/api/oauthApi';
import { oauthAPI } from './api/oauthApi';
import { RoutePath } from './router/RoutePath';
import { useSearchParams } from './hooks/useSearchParams';

const App = () => {
  const dispatch = useAppDispatch();
  const [domLoaded, setDomLoaded] = useState(false);
  const isAuthChecked = useAppSelector(getAuthCheckedStatus);
  const history = useHistory();

  useEffect(() => {
    setDomLoaded(true);
  }, []);

  const searchParams = useSearchParams();
  const param = searchParams.get('code');

  useEffect(() => {
    if (param) {
      const redirectUri = import.meta.env.VITE_YANDEX_OAUTH_REDIRECT_URI;
      const data: OauthRequestData = {
        code: param,
        redirect_uri: redirectUri
      };
      oauthAPI
        .signIn(data)
        .then(() => dispatch(fetchUser()))
        .then(() => {
          history.push(RoutePath.User);
        })
        .catch((error: string) => {
          console.log(error);
        });
    } else {
      dispatch(fetchUser());
    }
  }, []);

  return <>{domLoaded && (isAuthChecked ? <AppRouter /> : <Loader />)}</>;
};

export default App;
