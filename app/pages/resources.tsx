import type { NextPage } from 'next'
import Head from 'next/head'
import Header from './components/Header'
import ResourcesContent from './components/ResourcesContent'
import Footer from './components/Footer'
const resources: NextPage = () => {
  return (
    <>
      <Head>
        <title>Community Navigator Pilot program</title>
        <link rel="icon" href={`/favicon.ico`} />
      </Head>
      <div className="h-full">
        <Header />
        <ResourcesContent/>
        <Footer />
      </div>
    </>
  )
}

export default resources
