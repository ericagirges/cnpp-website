import { useRouter } from 'next/router'
import { data } from '../../data'

import Header from '../components/Header'
import StateContent from '../components/StateContent'
import Footer from '../components/Footer'

const state = () => {
  const router = useRouter()
  const { state } = router.query

  return (
    <>
      <Header />
      <StateContent data={data} state={state} />
      <Footer />
    </>
  )
}

export default state
