import Link from "next/link"

export default function Home() {
  return (
    <div>
      <h1 className="text-3xl md:text-5xl font-bold mb-4">Welcome! Home</h1>
      <Link href="/accounts/login" className="text-blue-500 text-xl mr-4">
        Login
      </Link>
      <Link href="/accounts/register" className="text-blue-500 text-xl">
        Register
      </Link>
    </div>
  )
}
