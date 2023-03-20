import userIcon from '../assets/icons/user-icon.svg';
import { BASE_URL } from '../constants';

export const getAvatar = (avatarPath: string | undefined | null): string => {
	return avatarPath ? `${BASE_URL}/resources/${avatarPath}` : userIcon;
};
