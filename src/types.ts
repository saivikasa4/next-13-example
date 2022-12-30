export type TRegisterForm = {
  name: string
  email: string
  password: string
}

export type TLoginForm = {
  email: TRegisterForm["email"]
  password: TRegisterForm["password"]
}

export type TUser = {
  id: string
  name: string
  email: string
}
