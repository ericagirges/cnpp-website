import type { NextPage } from 'next'
import Head from 'next/head'
import Header from './components/Header'
import SbrContent from './components/SmallBizContent'
import Footer from './components/Footer'
const sbr: NextPage = () => {
  return (
    <>
      <Head>
        <title>Community Navigator Pilot program</title>
        <link rel="icon" href={`/favicon.ico`} />
      </Head>
      <div className="h-full">
        <Header />
        <SbrContent/>
        <Footer />
      </div>
    </>
  )
}

export default sbr
