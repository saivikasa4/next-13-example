import client from "@/lib/prisma-db"
import withAuth from "@/middleware/withAuth"
import { INextApiRequestWithUser } from "@/types"
import type { NextApiResponse } from "next"

async function handler(req: INextApiRequestWithUser, res: NextApiResponse) {
  if (req.method === "GET") {
    const posts = await client.post.findMany({
      where: { authorId: req.user.id },
    })

    return res.status(200).json({ posts })
  }

  if (req.method === "POST") {
    const { title, content, published } = req.body

    await client.post.create({
      data: {
        authorId: req.user.id,
        title,
        content,
        published,
      },
    })

    return res.status(200).json({ message: "Post created" })
  }

  return res.status(405).json({ message: "Method not allowed" })
}

export default withAuth(handler)
