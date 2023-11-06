import Navbar from '@/components/shared/Navbar'
import './globals.css'
import type { Metadata } from 'next'
import Footer from '@/components/shared/Footer'
import { CssBaseline, ThemeProvider } from '@mui/material'
import theme from '@/utils/theme'

export const metadata: Metadata = {
  title: 'Test case Tiggzy',
  description: 'Increase your busineass growth',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html suppressHydrationWarning lang="en">
      <body>
        {children}
      </body>
    </html>
  )
}
