import type { Metadata } from "next";
import { ThemeProvider } from "@/components/utils/theme-provider"
import { GeistSans } from 'geist/font/sans'
import { SessionProvider } from "next-auth/react"
import { auth } from "@/auth"
import { Toaster } from "@/components/ui/sonner"
import "./globals.css";

export const metadata: Metadata = {
  title: "Langit Biru Banyuwangi - Paket Wisata Banyuwangi Murah & Lengkap",
  description: "Created by lundyscript.site",
};

export default async function RootLayout({children}: Readonly<{children: React.ReactNode}>) {
  const session = await auth()
  return (
    <SessionProvider session={session}>
      <html lang="en" suppressHydrationWarning={true} className={GeistSans.className}>
        <head>
          <meta name="format-detection" content="telephone=no, date=no, email=no, address=no" />
          <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no" />
          <link rel="icon" href="/icons8-sky-water-color-32.png" sizes="any" />
          <link rel="apple-touch-icon" href="/apple-touch-icon.png" type="image/<generated>" sizes="<generated>" />
        </head>
        <body>
          <ThemeProvider attribute="class" defaultTheme="light" enableSystem disableTransitionOnChange>
            <Toaster/>
            {children}
          </ThemeProvider>
        </body>
      </html>
    </SessionProvider>
  );
}
