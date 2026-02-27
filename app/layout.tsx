import type { Metadata } from "next";
import { ThemeProvider } from "@/components/utils/theme-provider"
import { GeistSans } from 'geist/font/sans'
import { SessionProvider } from "next-auth/react"
import { auth } from "@/auth"
import { Toaster } from "@/components/ui/sonner"
import "./globals.css";
import { WhatsAppButton } from "@/components/button/whatsapp-button";

export const metadata: Metadata = {
  title: "Langit Biru Banyuwangi - Paket Wisata Banyuwangi Murah & Lengkap",
  description: "Perjalanan nyaman dan kenangan tak terlupakan bersama Langit Biru Banyuwangi.",
  keywords: ["Paket Wisata Banyuwangi Murah dan Lengkap","Travel Agent Banyuwangi","Tour Banyuwangi","Liburan ke Banyuwangi","Open Trip Kawah Ijen","Blue Fire Ijen Tour","Paket Wisata Baluran","Tour Pulau Merah","Paket Trip Jawatan.","Destinasi Wisata Banyuwangi"],
  openGraph: {
    title: "Langit Biru Banyuwangi | Paket Wisata & Tour Terpercaya",
    description: "Jelajahi keindahan Kawah Ijen, Baluran, dan destinasi hits lainnya bersama Langit Biru Banyuwangi. Paket tour lengkap, harga jujur, dan pelayanan lokal terbaik. Pesan sekarang!",
    url: "https://www.langitbirubanyuwangi.com/",
    siteName: "Langit Biru Banyuwangi",
    images: [{ url: "/hero1.jpg" }],
    type: "website"
  }
};

export default async function RootLayout({children}: Readonly<{children: React.ReactNode}>) {
  const session = await auth()
  return (
    <SessionProvider session={session}>
      <html lang="en" suppressHydrationWarning={true} className={GeistSans.className}>
        <head>
          <meta name="format-detection" content="telephone=no, date=no, email=no, address=no" />
          <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no" />
          <link rel="icon" href="/iconlbb.png" sizes="any" />
          <link rel="apple-touch-icon" href="/apple-touch-icon.png" type="image/<generated>" sizes="<generated>" />
        </head>
        <body>
          <ThemeProvider attribute="class" defaultTheme="light" enableSystem disableTransitionOnChange>
            <Toaster/>
            {children}
            <WhatsAppButton 
              phoneNumber="6281321116569"
              message="Halo, saya ingin bertanya tentang paket wisata di Langit Biru Banyuwangi."
              tooltipText="Chat dengan WhatsApp"
            />
          </ThemeProvider>
        </body>
      </html>
    </SessionProvider>
  );
}
