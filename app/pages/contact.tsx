import type { NextPage } from 'next'
import Head from 'next/head'
import Header from './components/Header'
import Contact from './components/contact/ContactComponent'
import Footer from './components/Footer'

const contact: NextPage = () => {
  return (
    <>
      <Head>
        <title>Community Navigator Pilot program</title>
        <link rel="icon" href={`/favicon.ico`} />
      </Head>
      <div className="flex h-full flex-col justify-between overflow-y-scroll">
        <Header />
        <Contact />
        <Footer />
      </div>
    </>
  )
}

export default contact
