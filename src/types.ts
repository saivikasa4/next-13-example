import type { NextApiHandler, NextApiRequest, NextApiResponse } from "next"

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
  id: number
  name: string
  email: string
}

export type TPost = {
  id: number
  title: string
  content: string
  author: string
}

export interface INextApiRequestWithUser extends NextApiRequest {
  user: TUser
}

export type TCustomNextApiHandler<T = any> = (
  req: INextApiRequestWithUser,
  res: NextApiResponse<T>
) => unknown | Promise<unknown>
