// app/layout.tsx

import type { Metadata } from "next"
import "@/styles/globals.css"

export const metadata: Metadata = {
  title: "To Do App",
  description: "Powered by Django",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body>
        <main>{children}</main>
      </body>
    </html>
  )
}
