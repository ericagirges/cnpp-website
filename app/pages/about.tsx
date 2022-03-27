import type { NextPage } from 'next'
import Head from 'next/head'
import Header from './components/Header'
import About from './components/about/AboutContent'
import Footer from './components/Footer'
const about: NextPage = () => {
  return (
    <>
      <Head>
        <title>Community Navigator Pilot program</title>
        <link rel="icon" href={`/favicon.ico`} />
      </Head>
      <div className="h-full">
        <Header />
        <About />
        <Footer />
      </div>
    </>
  )
}

export default about
