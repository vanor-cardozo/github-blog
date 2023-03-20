import styled from 'styled-components'

export const PostSummaryContainer = styled.section`
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

export const PostSummaryDiv = styled.div`
  width: 100%;
`

export const PostSummaryHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  a {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    font-size: 0.875rem;
    font-weight: bold;
    text-decoration: none;
    color: ${(props) => props.theme.blue};
    cursor: pointer;

    &:hover {
      text-decoration: underline;
    }
  }
`

export const PostSummaryBody = styled.div`
  display: flex;
  color: ${(props) => props.theme['base-text']};

  h1 {
    font-weight: bold;
    font-size: 1.5rem;
    color: ${(props) => props.theme['base-title']};
    line-height: 4rem;
  }
`

export const PostSummaryFooter = styled.div`
  display: flex;
  align-items: center;
  gap: 3rem;

  span {
    display: flex;
    gap: 0.5rem;
    align-items: center;
    color: ${(props) => props.theme['base-subtitle']};
  }
`
