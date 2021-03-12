import React from 'react'
import { IoMdPin } from 'react-icons/io'
import * as S from '../styles/components/Coordinates'

const Coordinates: React.FC = () => {
  // Precisa saber as coordenadas do usuário

  return (
    <S.Container>
      <S.Info>
        <span>COORDINATES</span>
        <strong> -30.0277, -51.2287 </strong>
        <footer>
          <span>Lat</span>
          <span>Lon</span>
        </footer>
      </S.Info>
      <IoMdPin />
    </S.Container>
  )
}

export default Coordinates
