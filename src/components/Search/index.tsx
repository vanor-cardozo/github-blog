import { useContext, useState } from 'react'
import { BlogPostsContext } from '../../context/BlogPostsContext'
import { InputAndButtonDiv, SearchContainer } from './styles'

export function Search() {
  const { getData } = useContext(BlogPostsContext)
  const [searchInput, setSearchInput] = useState('')

  function handleSearchInput(e: { target: { value: any } }) {
    const stringToQuery = `${e.target.value.trim().replaceAll(' ', '+')}+`
    setSearchInput(stringToQuery)
  }

  return (
    <SearchContainer>
      <span>
        <h2>Publicações</h2>
        <p>6 publicações</p>
      </span>
      <InputAndButtonDiv>
        <input
          type="text"
          placeholder="Insira uma palavra para pesquisar no blog"
          onChange={handleSearchInput}
        />
        <button onClick={() => getData(searchInput)}>Buscar</button>
      </InputAndButtonDiv>
    </SearchContainer>
  )
}
