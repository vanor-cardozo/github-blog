import styled from 'styled-components'

export const SearchContainer = styled.div`
  width: 100%;
  max-width: 1120px;
  margin: 3rem auto;

  span {
    display: flex;
    align-items: baseline;
    justify-content: space-between;
  }
`

export const InputAndButtonDiv = styled.div`
  width: 100%;

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

  /* button {
    position: absolute;
    transform: translate(-75px);
    margin-top: 1.4rem;
    border: none;
    border-radius: 5px;
    background: ${(props) => props.theme['base-border']};
    padding: 0.6rem;
    color: ${(props) => props.theme.white};
    cursor: pointer;
    transition: background-color 0.2s;

    &:hover {
      background: ${(props) => props.theme['base-post']};
    }
  } */
`
