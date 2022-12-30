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
      const { name, email, password } = req.body

      // validate request
      if (!(name && email && password)) {
        return res.status(400).json({
          message: "All the fields are required fields",
        })
      }

      // check if user exists with the given email
      const isExistingUser = await client.user.findFirst({ where: { email } })
      if (isExistingUser) {
        return res.status(409).json({
          message: "User Already Exist. Please Login",
        })
      }

      // create a user after hashing the password
      const passwordHash = await bcrypt.hash(password, 10)
      const user = await client.user.create({
        data: {
          name,
          email: email.toLowerCase(),
          password: passwordHash,
        },
      })

      // create a jwt token
      const token = jwt.sign(
        { id: user.id, name, email },
        process.env.SECRET_KEY as string,
        {
          expiresIn: "12h",
        }
      )

      const cookieConfig = {
        maxAge: 12 * 60 * 60, // 12 hours
        sameSite: "same-site",
        httpOnly: true,
        path: "/dashboard",
      }

      return res
        .setHeader(
          "Set-Cookie",
          `token=${token}; sameSite=${cookieConfig.sameSite}; httpOnly=${cookieConfig.httpOnly}; path=${cookieConfig.path}; maxAge=${cookieConfig.maxAge}`
        )
        .status(201)
        .json({
          message: "Account created",
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
