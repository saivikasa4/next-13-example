import Link from "next/link"

function Profile() {
  return (
    <div>
      <Link href="/dashboard" className="text-xs text-blue-500 block mb-2">
        Back to dashboard
      </Link>
      <h1 className="text-xl md:text-3xl font-bold mb-4">My Profile</h1>
    </div>
  )
}

export default Profile
