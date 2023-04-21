import AppRouter from './router/AppRouter';
import { fetchUser } from './store/auth-actions';
import { useAppDispatch, useAppSelector } from './hooks/store';
import React, { useEffect, useState } from 'react';
import {
  getAuthCheckedStatus,
  getAuthorizationStatus
} from './store/selectors';
import Loader from './components/Loader/Loader';
import { useHistory } from 'react-router-dom';
import { OauthRequestData } from './types/api/oathApi';
import { OAUTH_REDIRECT_URI } from './constants';
import { oathAPI } from './api/oathApi';
import { RoutePath } from './router/RoutePath';
import { useSearchParams } from './hooks/useSearchParams';

const App = () => {
  const dispatch = useAppDispatch();
  const [domLoaded, setDomLoaded] = useState(false);
  const isAuthChecked = useAppSelector(getAuthCheckedStatus);
  const authStatus = useAppSelector(getAuthorizationStatus);
  const history = useHistory();

  useEffect(() => {
    setDomLoaded(true);
  }, []);

  useEffect(() => {
    dispatch(fetchUser());
  }, []);

  const searchParams = useSearchParams();
  const param = searchParams.get('code');

  useEffect(() => {
    if (param && authStatus !== 'AUTH') {
      const data: OauthRequestData = {
        code: param,
        redirect_uri: OAUTH_REDIRECT_URI
      };
      oathAPI
        .signIn(data)
        .then(() => dispatch(fetchUser()))
        .then(() => {
          history.push(RoutePath.User);
        })
        .catch((error: string) => {
          console.log(error);
        });
    }
  }, []);

  return <>{domLoaded && (isAuthChecked ? <AppRouter /> : <Loader />)}</>;
};

export default App;
