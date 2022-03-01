import type { NextPage } from 'next'
import Head from 'next/head'
import Header from './components/Header'
import Contact from './components/ContactComponent'
import Footer from './components/Footer'
import prefix from '../utils/prefix'

const contact: NextPage = () => {
  return (
    <>
      <Head>
        <title>Community Navigator Pilot program</title>
        <link rel="icon" href={`${prefix}/favicon.ico`} />
      </Head>
      <div className="h-full flex flex-col justify-between overflow-y-scroll">
        <Header />
        <Contact />
        <Footer />
      </div>
    </>
  )
}

export default contact
