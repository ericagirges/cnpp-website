import { useRouter } from 'next/router'
import { data } from '../../data'

import Head from 'next/head'
import Header from '../components/Header'
import StateContent from '../components/StateContent'
import Footer from '../components/Footer'

const state = () => {
  const router = useRouter()
  const { state } = router.query

  return (
    <>
      <Head>
        <title>Community Navigator Pilot program</title>
        <link rel="icon" href={`/favicon.ico`} />
      </Head>
      <Header />
      <StateContent data={data} state={state} />
      <Footer />
    </>
  )
}

export default state
