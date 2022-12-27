import getSession from "@/lib/get-session"
import { notFound } from "next/navigation"

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const user = getSession()

  if (!user) {
    notFound()
  }

  return <div>{children}</div>
}
