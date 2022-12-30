import type { NextApiRequest, NextApiResponse } from "next"
import client from "@/lib/prisma-db"
import withAuth from "@/middleware/withAuth"

async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === "GET") {
    const posts = await client.post.findMany({})

    return res.status(200).json({ posts })
  }

  if (req.method === "POST") {
    const { title, content, published } = req.body

    await client.post.create({
      data: {
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
