import type { Metadata } from 'next'
import './globals.css'
import { DM_Sans } from 'next/font/google'
import { Poppins } from 'next/font/google'

export const metadata: Metadata = {
  title: 'MBA Marketplace',
  description: 'MBA Marketplace',
}

const dm_sans = DM_Sans({
  weight: '700',
  subsets: ['latin'],
  display: 'swap',
})

const poppins = Poppins({
  weight: ['400', '500', '600'],
  subsets: ['latin'],
  display: 'swap',
})

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="pt">
      <body className={`${poppins.className}`}>
        <div className={`${dm_sans.className}`}>{children}</div>
      </body>
    </html>
  )
}
