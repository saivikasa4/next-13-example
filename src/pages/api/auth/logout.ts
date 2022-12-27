import type { NextApiRequest, NextApiResponse } from "next"

type AuthResponse = {
  message: string
  token?: string
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<AuthResponse>
) {
  if (req.method === "GET") {
    const cookieConfig = {
      maxAge: 0,
      sameSite: "same-site",
      httpOnly: true,
      path: "/dashboard",
    }

    return res
      .setHeader(
        "Set-Cookie",
        `token=; sameSite=${cookieConfig.sameSite}; httpOnly=${cookieConfig.httpOnly}; path=${cookieConfig.path}; maxAge=${cookieConfig.maxAge}`
      )
      .status(200)
      .json({
        message: "Logged out",
      })
  }

  return res.status(405).json({ message: "Method not allowed" })
}
