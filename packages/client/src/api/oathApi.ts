import { API } from './api';
import qs from 'qs';
import { OauthRequestData, RedirectUri, ServiceId } from '../types/api/oathApi';
export const oathAPI = {
  async signIn(data: OauthRequestData) {
    return API.post<OauthRequestData, void>('oauth/yandex', data);
  },

  async getServiceID(queriesData: RedirectUri) {
    const urlWithQueries = `${qs.stringify(queriesData)}`;
    return API.getServiceId<string, ServiceId>(
      'oauth/yandex/service-id',
      urlWithQueries
    );
  }
};
