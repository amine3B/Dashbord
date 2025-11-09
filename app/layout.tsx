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
        url: '/image/logo-dark.png',
        media: '(prefers-color-scheme: light)',
      },
      {
        url: '/image/logo-dark.png',
        media: '(prefers-color-scheme: dark)',
      },
      {
        url: '/image/logo-dark.png',
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
      <body className={`font-sans antialiased`}>
        {children}
      </body>
    </html>
  )
}
