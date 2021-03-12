import React from 'react'
import * as S from '../styles/components/Information'
import { IoLogoLinkedin, IoLogoGithub, IoMdSunny } from 'react-icons/io'

const Information: React.FC = () => {
  // Informações fixas

  return (
    <S.Container>
      <strong>Created by:</strong>
      <S.InfoCreatedByContainer>
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://www.linkedin.com/in/otavionasc/"
        >
          <S.Information>
            <IoLogoLinkedin />
            <span>/otavionasc</span>
          </S.Information>
        </a>
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://github.com/otavionasc"
        >
          <S.Information>
            <IoLogoGithub />
            <span>/otavionasc</span>
          </S.Information>
        </a>
      </S.InfoCreatedByContainer>
      <S.Line />
      <strong>Data Source:</strong>
      <S.InfoDataSourceContainer>
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://sunrise-sunset.org/api"
        >
          <S.Information>
            <IoMdSunny />
            <span>sunrise-sunset.org/api</span>
          </S.Information>
        </a>
      </S.InfoDataSourceContainer>
    </S.Container>
  )
}

export default Information
