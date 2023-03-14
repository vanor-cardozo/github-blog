import styled from 'styled-components'
import logoImg from '../../assets/cover.svg'

export const HeaderContainer = styled.header`
  width: 100%;
  height: 296px;
  background-image: url('${logoImg}');
  background-size: cover;

  display: flex;
  justify-content: center;

  img {
    display: flex;
    width: 148px;
  }
`
