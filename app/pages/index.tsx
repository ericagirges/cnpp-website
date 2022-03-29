import type { NextPage } from 'next'

import HeroHeader from './components/HeroHeader'
import InfoBox from './components/InfoBox'
import InfoBlob from './components/InfoBlob'
import HorizontalCard from './components/HorizontalCard'
import GetConnected from './components/GetConnected';
import Footer from './components/Footer'


const Landing: NextPage = () => {
  return (
    <div>
      <HeroHeader />
      <HorizontalCard />
      <InfoBox />
      <InfoBlob />
      <GetConnected />
      <Footer />
    </div>
  )
}

export default Landing
