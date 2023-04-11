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
        <head>
          <meta charSet="UTF-8" />
          <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
          <meta name="viewport" content="width=device-width, initial-scale=1.0" />
          <title>Css Tool</title>
        </head>
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
