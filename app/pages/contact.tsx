import type { NextPage } from 'next'
import Head from 'next/head'
import Header from './components/Header'
import Contact from './components/ContactComponent'
import Footer from './components/Footer'

const contact: NextPage = () => {
  return (
    <>
      <Head>
        <title>Community Navigator Pilot program</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="h-full flex flex-col justify-between">
        <Header />
        <Contact />
        <Footer />
      </div>
    </>
  )
}

export default contact
