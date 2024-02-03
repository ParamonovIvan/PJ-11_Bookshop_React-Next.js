import Head from 'next/head'
import { PropsWithChildren } from 'react'
import Navbar from '../Navbar/Navbar'
import { Montserrat } from 'next/font/google'

const font = Montserrat({
  weight: ["700"],
  subsets: ["latin", "cyrillic"]
})

const Layout = ({children}: PropsWithChildren) => {
  return (
    <>
      <Head>
        <title>Book Shop</title>
        <meta name="description" content="Development on Next.js, Redux-toolkit, Redux-persist, Typescript"/>
        <meta name="viewport" content="width=device-width, initial-scale=1"/>
        <link rel="icon" href="/favicon.ico"/>
      </Head>
      <div className={font.className}>
        <header>
          <Navbar/>
        </header>
        <main>
          {children}
        </main>
      </div>
    </>
  )
}

export default Layout
