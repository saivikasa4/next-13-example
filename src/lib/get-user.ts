import getSession from "./get-session"
import { cookies } from "next/headers"

function getUser() {
  const token = cookies().get("token")?.value

  return getSession(token)
}

export default getUser
