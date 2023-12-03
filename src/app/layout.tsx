import type { Metadata } from 'next'
import { Providers } from './providers'

import '../styles/sass/index.scss'

export const metadata: Metadata = {
  title: 'My Blog Next',
  description: 'My Blog Next'
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang='en' suppressHydrationWarning>
      <head />
      <body suppressHydrationWarning>
        <Providers>{children}</Providers>
      </body>
    </html>
  )
}
