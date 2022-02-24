import type { NextPage } from 'next'
import Head from 'next/head'
import Header from './components/Header'
import Contact from './components/ContactComponent'

const contact: NextPage = () => {
  return (
    <>
      <Head>
        <title>Community Navigator Pilot program</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <Contact />
    </>
  )
}

export default contact
