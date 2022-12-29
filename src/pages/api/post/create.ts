import type { NextApiRequest, NextApiResponse } from "next"
import client from "@/lib/prisma-db"

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === "POST") {
    const { title, content } = req.body

    await client.post.create({
      data: {
        title,
        content,
      },
    })

    return res.status(200).json({ message: "Post created" })
  }

  return res.status(405).json({ message: "Method not allowed" })
}
