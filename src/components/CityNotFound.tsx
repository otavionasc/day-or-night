import React from 'react'
import { Container } from '../styles/components/CityNotFound'

const CityNotFound: React.FC = () => {
  // Precisa ser chamado quando não forem localizadas as coordenadas: [long, lat]coordenates = null
  // Precisa guardar as coordenadas do usuário nos cookies

  return (
    <Container>
      <span>Give permission to continue</span>
    </Container>
  )
}

export default CityNotFound
