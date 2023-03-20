import { useContext } from 'react'
import { BlogPostsContext } from '../../../../context/BlogPostsContext'
import { InputAndButtonDiv, SearchContainer } from './styles'

export function Search() {
  const { posts, setFilteredPosts, filteredPosts } =
    useContext(BlogPostsContext)
  // const [searchInput, setSearchInput] = useState('')

  // function handleSearchInput(e: { target: { value: any } }) {
  //   const stringToQuery = `${e.target.value.trim().replaceAll(' ', '+')}+`
  //   setSearchInput(stringToQuery)
  // }

  function handleSearchInput(e: { target: { value: String } }) {
    const stringToFind = e.target.value.toUpperCase()
    const result = posts.filter(
      (post) =>
        post.title.toUpperCase().includes(stringToFind) ||
        post.body.toUpperCase().includes(stringToFind),
    )
    setFilteredPosts(result)
  }

  return (
    <SearchContainer>
      <span>
        <h2>Publicações</h2>
        <p>{`${filteredPosts.length} publicações`}</p>
      </span>
      <InputAndButtonDiv>
        <input
          type="text"
          placeholder="Buscar conteúdo"
          onChange={handleSearchInput}
        />
        {/* <button onClick={() => handleSearchInput()}>Limpar</button> */}
      </InputAndButtonDiv>
    </SearchContainer>
  )
}
