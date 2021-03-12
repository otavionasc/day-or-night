import React from 'react'
import * as S from '../styles/components/Response'

const Response: React.FC = () => {
  // Precisa saber se é dia ou noite: isDay

  return (
    <S.Container>
      <S.Circle />
      <S.Info>
        <span>It is</span>
        <strong>Day</strong>
      </S.Info>
    </S.Container>
  )
}

export default Response
