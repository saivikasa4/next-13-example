import getSession from "@/lib/get-session"
import { INextApiRequestWithUser, TCustomNextApiHandler } from "@/types"
import type { NextApiResponse } from "next"
import { cookies } from "next/headers"

function withAuth(handler: TCustomNextApiHandler) {
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
