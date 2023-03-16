import styled from 'styled-components'

export const CardContainer = styled.section`
  width: 100%;
  max-width: 1120px;
  margin: 0rem auto;
  display: grid;
  grid-template-columns: 48.5% 48.5%;
  gap: 2rem;
`

export const CardDiv = styled.div`
  height: 350px;
  padding: 2rem;
  border-radius: 10px;
  background: ${(props) => props.theme['base-post']};
  overflow: hidden !important;
  text-overflow: ellipsis;

  span {
    display: grid;
    grid-template-columns: 70% 30%;
    font-size: 1.25rem;
    color: ${(props) => props.theme['base-title']};
    align-items: baseline;

    p {
      display: flex;
      justify-content: end;
      font-size: 0.875rem;
      color: ${(props) => props.theme['base-span']};
    }
  }

  p {
    margin-top: 1.5rem;
    color: ${(props) => props.theme['base-text']};
  }
`
