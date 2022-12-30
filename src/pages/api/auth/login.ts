import client from "@/lib/prisma-db"
import bcrypt from "bcrypt"
import jwt from "jsonwebtoken"
import type { NextApiRequest, NextApiResponse } from "next"

type AuthResponse = {
  message: string
  token?: string
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<AuthResponse>
) {
  if (req.method === "POST") {
    try {
      const { email, password } = req.body

      // validate request
      if (!(email && password)) {
        return res.status(400).json({
          message: "All the fields are required fields",
        })
      }

      // check if user exists with the given email
      const isExistingUser = await client.user.findFirst({ where: { email } })
      if (!isExistingUser) {
        return res.status(404).json({
          message: "User not found",
        })
      }

      // verify if the provided password is correct
      const passwordVerified = await bcrypt.compare(
        password,
        isExistingUser.password
      )
      if (!passwordVerified) {
        return res.status(401).json({
          message: "Invalid credentials",
        })
      }

      // create a jwt token
      const token = jwt.sign(
        {
          id: isExistingUser.id,
          name: isExistingUser.name,
          email,
        },
        process.env.SECRET_KEY as string,
        {
          expiresIn: "12h",
        }
      )

      const cookieConfig = {
        maxAge: 12 * 60 * 60, // 12 hours
        sameSite: "same-site",
        httpOnly: true,
        path: "/",
      }

      return res
        .setHeader(
          "Set-Cookie",
          `token=${token}; sameSite=${cookieConfig.sameSite}; httpOnly=${cookieConfig.httpOnly}; path=${cookieConfig.path}; maxAge=${cookieConfig.maxAge}`
        )
        .status(200)
        .json({
          message: "Logged In",
        })
    } catch (error) {
      console.log(error)

      return res.status(500).json({
        message: "Something went wrong",
      })
    }
  }

  return res.status(405).json({ message: "Method not allowed" })
}
