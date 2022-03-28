import type { NextPage } from 'next'
import Head from 'next/head'
import Header from './components/Header'
import News from './components/news/NewsContent'
import Footer from './components/Footer'
const news: NextPage = () => {
  return (
    <>
      <Head>
        <title>Community Navigator Pilot program</title>
        <link rel="icon" href={`/favicon.ico`} />
      </Head>
      <div className="h-full">
        <Header />
        <News />
        <Footer />
      </div>
    </>
  )
}

export default news