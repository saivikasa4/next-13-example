import "./globals.css"
import { Inter } from "@next/font/google"

const primaryFont = Inter({ subsets: ["latin"], variable: "--font-primary" })

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={primaryFont.variable}>
      <head>
        <title>Example App</title>
        <meta name="description" content="An example app" />
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body className="py-8 md:py-24 w-11/12 md:w-auto max-w-screen-md mx-auto">
        {children}
      </body>
    </html>
  )
}
