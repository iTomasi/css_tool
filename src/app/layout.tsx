import Header from 'components/Header'
import 'tailwindcss/tailwind.css'

export default function Layout ({
  children
}: any) {
  return (
    <html lang="en">
    <head>
      <meta charSet="UTF-8" />
      <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <title>Document</title>
    </head>
    <body className="bg-stone-950 text-white">
      <Header/>
      <main>
        {children}
      </main>
    </body>
    </html>
  )
}
