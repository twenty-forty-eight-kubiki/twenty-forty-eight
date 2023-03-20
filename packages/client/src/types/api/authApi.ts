export type SignupRequestData = {
	first_name: string;
	second_name: string;
	login: string;
	email: string;
	password: string;
	phone: string;
};

export type UserInfoResponse = {
	id: number;
	first_name: string;
	second_name: string;
	display_name: string;
	login: string;
	email: string;
	phone: string;
	avatar: string;
};

export type LoginRequestData = {
	login: string;
	password: string;
};

export type SignupResponse = {
	id?: string;
	reason?: string;
};
