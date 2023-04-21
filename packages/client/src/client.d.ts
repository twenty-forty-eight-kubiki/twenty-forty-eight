import { RootState } from './store/store.types';

declare const __SERVER_PORT__: number;

declare global {
  interface Window {
    // eslint-disable-next-line @typescript-eslint/naming-convention
    __INITIAL_STATE__?: RootState;
  }
}
