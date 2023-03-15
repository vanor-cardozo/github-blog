import { SearchContainer } from './styles'

export function Search() {
  return (
    <SearchContainer>
      <span>
        <h2>Publicações</h2>
        <p>6 publicações</p>
      </span>
      <input type="text" placeholder="Buscar conteúdo" />
    </SearchContainer>
  )
}
