import { useRouter } from 'next/router'
import { data } from '../../data'

import Header from '../components/Header'
import StateContent from '../components/StateContent'

const state = () => {
  const router = useRouter()
  const state = router.query.state

  return (
    <>
      <Header />
      <StateContent data={data} state={state} />
    </>
  )
}

export default state
