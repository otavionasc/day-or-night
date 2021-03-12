import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;

  color: #ecf0f1;

  opacity: 0.7;

  svg {
    width: 50px;
    height: 50px;
  }
`

export const Info = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  span {
    font-size: 0.65rem;
  }

  strong {
    font-size: 0.75rem;
  }

  footer {
    width: 60%;
    display: flex;
    justify-content: space-between;
  }
`
