import styled from 'styled-components'

export const SearchContainer = styled.div`
  width: 100%;
  max-width: 1120px;
  margin: 5rem auto;

  span {
    display: flex;
    align-items: baseline;
    justify-content: space-between;
  }

  input {
    border: 2px solid ${(props) => props.theme['base-border']};
    border-radius: 6px;
    width: 100%;
    margin-top: 1rem;
    background: ${(props) => props.theme['base-input']};
    padding: 0.875rem;
    color: ${(props) => props.theme['base-text']};

    &::placeholder {
      color: ${(props) => props.theme['base-label']};
    }
  }
`
