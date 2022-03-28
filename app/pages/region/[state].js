import { useRouter } from 'next/router'
import { data } from '../../data'

import StateContent from '../components/StateContent'

const state = () => {
  const router = useRouter()
  const { state } = router.query

  return <StateContent data={data} state={state} />
}

export default state
