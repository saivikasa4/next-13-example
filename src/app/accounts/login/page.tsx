"use client"

import Link from "next/link"
import { useRouter } from "next/navigation"
import { useState } from "react"
import { TLoginForm } from "@/types"
import { login } from "./Login.helpers"

function Login() {
  const router = useRouter()
  const [form, setForm] = useState<TLoginForm>({ email: "", password: "" })
  const [isLoading, setIsLoading] = useState<boolean>(false)

  async function handleSubmit() {
    setIsLoading(true)
    const status = await login(form)
    setIsLoading(false)

    if (status === 200) {
      router.push("/dashboard")
      return
    }
  }

  return (
    <div className="max-w-xs mx-auto">
      <Link href="/" className="text-xs text-blue-500 block mb-2">
        Back to home
      </Link>

      <h1 className="text-xl md:text-3xl font-bold mb-5">Login</h1>
      <input
        type="email"
        name="email"
        id="email"
        placeholder="Your Email"
        className="block w-full px-4 py-2 rounded-xl outline-none focus:border-blue-400 mb-4 border dark:border-gray-700"
        onChange={(e) => setForm({ ...form, email: e.target.value })}
      />
      <input
        type="password"
        name="password"
        id="password"
        placeholder="Your Password"
        className="block w-full px-4 py-2 rounded-xl outline-none focus:border-blue-400 mb-5 border dark:border-gray-700"
        onChange={(e) => setForm({ ...form, password: e.target.value })}
      />

      <button
        onClick={handleSubmit}
        className="w-full bg-blue-500 rounded-xl py-2 mb-5"
      >
        {isLoading ? "Logging In" : "Login"}
      </button>

      <Link
        href="/accounts/register"
        className="text-xs text-center block text-blue-500"
      >
        Create an account
      </Link>
    </div>
  )
}

export default Login
