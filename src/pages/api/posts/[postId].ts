import client from "@/lib/prisma-db"
import withAuth from "@/middleware/withAuth"
import { INextApiRequestWithUser } from "@/types"
import type { NextApiResponse } from "next"

async function handler(req: INextApiRequestWithUser, res: NextApiResponse) {
  if (req.method === "GET") {
    const { postId } = req.query as { postId: string }
    const post = await client.post.findFirst({
      where: { id: parseInt(postId) },
    })

    return res.status(200).json({ post })
  }

  return res.status(405).json({ message: "Method not allowed" })
}

export default withAuth(handler)
