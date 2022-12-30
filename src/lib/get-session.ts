import { TUser } from "@/types"
import jwt from "jsonwebtoken"

function getSession(token: string | undefined) {
  try {
    if (!token) {
      return null
    }
    const decodedToken = jwt.verify(
      token,
      process.env.SECRET_KEY as string
    ) as TUser

    if (decodedToken) {
      return decodedToken
    }

    return null
  } catch (error) {
    return null
  }
}

export default getSession
