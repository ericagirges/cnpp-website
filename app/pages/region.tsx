import type { NextPage } from 'next'
import Head from 'next/head'
import Header from './components/Header'
import RegionalLanding from './region/RegionalLandingContent'
import Footer from './components/Footer'
const regions: NextPage = () => {
  return (
    <>
      <Head>
        <title>Community Navigator Pilot program</title>
        <link rel="icon" href={`/favicon.ico`} />
      </Head>
      <div className="h-full">
        <Header />
        <RegionalLanding />
        <Footer />
      </div>
    </>
  )
}

export default regions;