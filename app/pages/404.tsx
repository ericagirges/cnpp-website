import type { NextPage } from 'next'
import Head from 'next/head'
import Header from './components/Header'

const NotFound: NextPage = () => {
  return (
    <>
      <Head>
        <title>Community Navigator Pilot program</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <h1>404 | Not Found</h1>
    </>
  )
}

export default NotFound
