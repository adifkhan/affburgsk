import './globals.css'
import { ReduxProvider } from './GlobalRedux/provider'
import React from 'react'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Affburg',
  description: 'Increase your busineass growth',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;

}) {
  return (
    <html suppressHydrationWarning lang="en">
      <body>
        <ReduxProvider>{children}</ReduxProvider>
      </body>
    </html>
  )
}