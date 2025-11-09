import type { Metadata } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import './globals.css'

const _geist = Geist({ subsets: ["latin"] });
const _geistMono = Geist_Mono({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: 'Chrono School',
  icons: {
    icon: [
      {
        url: '/image/web-app-512x512.png',
        media: '(prefers-color-scheme: light)',
      },
      {
        url: '/image/web-app-512x512.png',
        media: '(prefers-color-scheme: dark)',
      },
      {
        url: '/image/web-app-512x512.png',
        type: '/image/logo-dark.png',
      },
    ],
    apple: '/apple-icon.png',
  },
  manifest: '/manifest.webmanifest'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <head><meta name="apple-mobile-web-app-title" content="MyWebSite" /></head>
      <body className={`font-sans antialiased`}>
        {children}
      </body>
    </html>
  )
}
