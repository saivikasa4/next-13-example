"use client"

import logout from "@/lib/logout"
import Link from "next/link"
import { useRouter } from "next/navigation"
import { PlusIcon } from "@heroicons/react/24/solid"
import Posts from "./Dashboard.Posts"

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
      <header className="mb-10">
        <h1 className="text-xl md:text-3xl font-bold mb-4">
          You are logged in
        </h1>
        <Link href="/dashboard/profile" className="text-blue-500 text-xl mr-4">
          My Profile
        </Link>
        <button onClick={handleLogout} className="text-blue-500 text-xl">
          Logout
        </button>
      </header>

      <section>
        <Link
          href="/dashboard/post/create"
          className="md:w-[160px] md:h-[160px] font-medium hover:bg-blue-500 transition-all duration-150 ease-in-out hover:text-white dark:hover:text-black rounded-xl flex flex-col items-center justify-center text-blue-500 border border-blue-500"
        >
          <PlusIcon className="w-10 h-10 mb-1 block" />
          Create Post
        </Link>

        <Posts />
      </section>
    </div>
  )
}

export default Dashboard
