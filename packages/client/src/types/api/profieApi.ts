export type ProfileRequestData = {
  first_name: string
  second_name: string
  display_name: string
  login: string
  email: string
  phone: string
}

export type PasswordRequestData = {
  oldPassword: string
  newPassword: string
}

export type FileRequestData = {
  file: File
  fileName: string
}
