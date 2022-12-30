import getUser from "@/lib/get-user"
import { notFound } from "next/navigation"

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const user = getUser()

  if (!user) {
    notFound()
  }

  return <div>{children}</div>
}
