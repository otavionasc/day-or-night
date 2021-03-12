import styled from 'styled-components'

export const Container = styled.div`
  height: 100vh;
  max-width: 1920px;
  margin: 0 auto;
  padding: 2.5rem 2rem;

  display: flex;
  flex-direction: column;
`

export const InfoContainer = styled.div`
  height: 100vh;
  background: rgb(41, 128, 185);
  background: linear-gradient(
    180deg,
    rgba(41, 128, 185, 1) 5%,
    rgba(155, 195, 222, 1) 30%,
    rgba(207, 230, 246, 1) 53%,
    rgba(255, 255, 255, 1) 83%
  );

  display: flex;
  flex-direction: column;
`
