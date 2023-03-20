import { APIError } from '../types/api/shared';

export const isAPIError = (data: unknown): data is APIError =>
	!!data && typeof data === 'object' && 'reason' in data;
