import { useRouter } from 'next/router'
import { StateData } from '../../page-content/StateContent'

import StateContent from '../components/StateContent'

const state = () => {
  const router = useRouter()
  const { state } = router.query

  return <StateContent data={StateData} state={state} />
}

export default state
