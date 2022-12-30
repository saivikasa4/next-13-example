import getSession from "@/lib/get-session"
import { TUser } from "@/types"
import type { NextApiHandler, NextApiRequest, NextApiResponse } from "next"

interface INextApiRequestWithUser extends NextApiRequest {
  user: TUser
}

function withAuth(handler: NextApiHandler) {
  return async function (req: INextApiRequestWithUser, res: NextApiResponse) {
    const token = req.cookies["token"]
    const user = getSession(token)
    if (!user) {
      return res.status(401).json({ message: "Unauthorized" })
    }

    req.user = user

    return handler(req, res)
  }
}

export default withAuth
