export enum FormFields {
  Firstname = 'firstname',
  Surname = 'surname',
  Email = 'email',
  Password = 'password',
  ConfirmPassword = 'confirmPassword',
}

export type Form = Record<string, string | null> | Record<string, never>