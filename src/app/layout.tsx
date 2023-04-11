import type { Metadata } from 'next'
import Header from 'components/Header'

// Providers
import { ThemeProvider } from 'context/theme'

import 'tailwindcss/tailwind.css'

export default function Layout ({
  children
}: any) {
  return (
    <ThemeProvider>
      <html className="dark" lang="en">
        {/* <head>
          <meta charSet="UTF-8" />
          <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
          <meta name="viewport" content="width=device-width, initial-scale=1.0" />
          <link href="/favicon.ico" rel="icon" />
          <title>CSS Tool</title>
        </head> */}
        <body className="dark:bg-stone-950 dark:text-white">
          <Header/>
          <main>
            {children}
          </main>
        </body>
      </html>
    </ThemeProvider>
  )
}

export const metadata: Metadata = {
  title: 'CSS Tool',
  description: 'CSS Tool - Playground to create custom box-shadow for CSS && Tailwind',
  keywords: 'css tool, css-tool, box shadow playground, box-shadow playground, box shadow generator, box-shadow generator, tomas duclos box shadow, box shadow',
  icons: {
    icon: '/favicon.ico'
  },
  authors: {
    name: 'Tomas Duclos',
    url: 'https://tomasduclos.xyz'
  }
}
