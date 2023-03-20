import styled from 'styled-components'

export const PostBodyContainer = styled.section`
  width: 100%;
  max-width: 1120px;
  margin: 5rem auto;
  padding: 2rem;

  background: ${(props) => props.theme['base-profile']};
  border-radius: 10px;

  line-height: 1.5rem;

  p + p {
    text-indent: 1.5rem;
  }

  a {
    text-decoration: none;
    color: ${(props) => props.theme.blue};
    font-weight: bold;
  }

  h3 {
    line-height: 4rem;
  }
`
