import styled from 'styled-components'

export const SummaryContainer = styled.section`
  width: 100%;
  max-width: 1120px;
  margin: 5rem auto;
  padding: 2rem;

  display: flex;
  align-items: center;
  gap: 2rem;

  background: ${(props) => props.theme['base-profile']};
  border-radius: 10px;
`
export const SummaryAvatar = styled.div`
  img {
    width: 148px;
    border-radius: 8px;
  }
`

export const SummaryDiv = styled.div`
  width: 100%;
`

export const SummaryHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  h1 {
    font-weight: bold;
    font-size: 1.5rem;
    color: ${(props) => props.theme.white};
    line-height: 3rem;
  }

  a {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    font-size: 0.875rem;
    text-decoration: none;
    color: ${(props) => props.theme.blue};

    &:hover {
      text-decoration: underline;
    }
  }
`

export const SummaryBody = styled.div`
  display: flex;
  color: ${(props) => props.theme['base-text']};
`

export const SummaryFooter = styled.div`
  display: flex;
  align-items: center;
  gap: 3rem;
  margin-top: 1.5rem;

  span {
    display: flex;
    gap: 0.5rem;
    align-items: center;
    color: ${(props) => props.theme['base-subtitle']};
  }
`
