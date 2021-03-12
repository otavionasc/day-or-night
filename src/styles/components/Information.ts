import styled from 'styled-components'

export const Container = styled.div`
  height: 100vh;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  color: #2c3e50;
  font-size: 3rem;
  font-weight: 600;

  strong {
    margin: 15px 0 10px 0;
  }

  a {
    display: flex;
    justify-content: center;
    align-items: center;
    transition: color 0.1s linear;
    color: inherit;
    text-decoration: none;
  }

  a:hover {
    color: #56799c;
  }
`
export const InfoCreatedByContainer = styled.div`
  width: 30%;

  display: flex;
  justify-content: space-between;
  align-items: center;
`

export const InfoDataSourceContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`
export const Information = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 2rem;
`

export const Line = styled.div`
  display: flex;
  align-items: center;

  height: 3px;
  width: 40%;
  border-radius: 3px;
  background: #2c3e50;
  margin: 3rem 0 1rem 0;

  opacity: 0.7;
`
