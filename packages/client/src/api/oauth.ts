import { API } from './api';
import qs from 'qs';
import { OauthRequestData, ServiceId } from '../types/api/oauth';
export const oauthAPI = {
  async signIn(data: OauthRequestData) {
    return API.post<OauthRequestData, void>('oauth/yandex', data);
  },

  async getServiceID(queriesData: string) {
    const redirect = { redirect_uri: queriesData };
    const queries = `${qs.stringify(redirect)}`;
    return API.getServiceId<string, ServiceId>(
      'oauth/yandex/service-id',
      queries
    );
  }
};
