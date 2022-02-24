import type { NextPage } from 'next'
import Head from 'next/head'
import HeroHeader from './components/HeroHeader'
import InfoBox from './components/InfoBox'
import HorizontalCard from './components/HorizontalCard'

const Landing: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Community Navigator Pilot program</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <HeroHeader />
      <HorizontalCard />
      <InfoBox />
    </div>
  )
}

export default Landing
