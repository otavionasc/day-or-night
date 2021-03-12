import React from 'react'
import Head from 'next/head'

import * as S from '../styles/pages/Home'

// My Components
import CityNotFound from '../components/CityNotFound'
import Coordinates from '../components/Coordinates'
import Response from '../components/Response'
import Countdown from '../components/Countdown'
import Information from '../components/Information'

const Home: React.FC = () => {
  return (
    <>
      <S.Container>
        <Head>
          <title>It is day or night?</title>
        </Head>
        {false && <CityNotFound />}
        <Coordinates />
        <Response />
        <Countdown />
      </S.Container>
      <S.InfoContainer>
        <Information />
      </S.InfoContainer>
    </>
  )
}

export default Home
