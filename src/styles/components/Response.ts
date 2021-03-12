import styled from 'styled-components'

export const Container = styled.div`
  height: 75vh;

  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`
export const Circle = styled.div`
  width: 40vw;
  padding-bottom: 40%;
  border-radius: 50%;
  background: #f1c40f;
`
export const Info = styled.div`
  position: absolute;

  span {
    font-size: 3rem;
    padding: 0 0 0 15px;
    position: absolute;
  }

  strong {
    font-size: 16.5rem;
  }
`
