import React from 'react'
import * as S from '../styles/components/Countdown'

const Countdown: React.FC = () => {
  // Contador para indicar quanto tempo falta para ser dia ou noite

  return (
    <S.Container>
      <span>2 hours, 53 minutes, 25 seconds to go before night.</span>
    </S.Container>
  )
}

export default Countdown
