"use client"

import logout from "@/lib/logout"
import Link from "next/link"
import { useRouter } from "next/navigation"

function Dashboard() {
  const router = useRouter()

  async function handleLogout() {
    const result = await logout()
    if (result) {
      router.push("/accounts/login")
    }
  }
  return (
    <div>
      <h1 className="text-xl md:text-3xl font-bold mb-4">You are logged in</h1>
      <Link href="/dashboard/profile" className="text-blue-500 text-xl mr-4">
        My Profile
      </Link>
      <button onClick={handleLogout} className="text-blue-500 text-xl">
        Logout
      </button>
    </div>
  )
}

export default Dashboard
