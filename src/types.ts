export type TRegisterForm = {
  name: string
  email: string
  password: string
}
export type TLoginForm = {
  email: TRegisterForm["email"]
  password: TRegisterForm["password"]
}
