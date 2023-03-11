export type SignupRequestData = {
  first_name: string
  second_name: string
  login: string
  email: string
  password: string
  phone: string
}

export type LoginRequestData = {
  login: string
  password: string
}

export type signupResponse = {
  id?: string,
  reason?: string
}

export type APIError = {
  reason: string;
};
