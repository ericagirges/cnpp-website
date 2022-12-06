import { useRouter } from 'next/router'
import { StateData } from '../../page-content/StateContent'

import StateContent from '../components/StateContent'

const state = ({states}) => {
  const router = useRouter()
  const { state } = router.query

  return <StateContent data={states} state={state} />
}

export default state

export const getStaticProps = () => {
  return {
    props: { states: StateData}
  }
}

export const getStaticPaths = () => {
  const states = Object.keys(StateData);

  const paths = states.map(stateName => {
    return {
      params: { state: stateName }
    }
  })

  return {
    paths,
    fallback: false,
  }
}
