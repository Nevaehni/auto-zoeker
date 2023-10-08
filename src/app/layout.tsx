import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import {ThemeProvider} from "@/components/theme-provider";

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Auto Zoeker',
  description: 'Zoek uw volgende auto gemakkelijk online!',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
      <>
        <html lang="en" suppressHydrationWarning>
        <head />
        <body>
        <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
        </body>
        </html>
      </>
  )
}
