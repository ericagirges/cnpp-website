import type { NextPage } from 'next'

import HeroHeader from './components/HeroHeader'
import InfoBox from './components/InfoBox'
import InfoBlob from './components/InfoBlob'
import HorizontalCard from './components/HorizontalCard'


const Landing: NextPage = () => {
  return (
    <div>
      <HeroHeader />
      <HorizontalCard />
      <InfoBox />
      <InfoBlob />
    </div>
  )
}

export default Landing
