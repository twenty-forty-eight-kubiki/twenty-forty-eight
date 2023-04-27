import { oauthAPI } from '../api/oauthApi';

export const getServiceId = () => {
  const redirect = import.meta.env.VITE_YANDEX_OAUTH_REDIRECT_URI;
  oauthAPI.getServiceID(redirect).then(response => {
    window.location.replace(
      `https://oauth.yandex.ru/authorize?response_type=code&client_id=${response.service_id}&redirect_uri=${redirect}`
    );
  });
};
