import jwt from "jsonwebtoken"
import { cookies } from "next/headers"

function getSession() {
  try {
    const token = cookies().get("token")?.value
    if (!token) {
      return null
    }
    const decodedToken = jwt.verify(token, process.env.SECRET_KEY as string)

    if (decodedToken) {
      return decodedToken
    }

    return null
  } catch (error) {
    return null
  }
}

export default getSession
