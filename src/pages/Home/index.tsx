import { Header } from '../../components/Header'
import { useContext, useEffect } from 'react'
import { BlogPostsContext } from '../../context/BlogPostsContext'
import { BlogCard } from './components/BlogCard'
import { Search } from './components/Search'
import { Summary } from './components/Summary'
import { HomeContainer } from './styles'

export function Home() {
  const { resetFilteredPosts } = useContext(BlogPostsContext)

  useEffect(() => {
    resetFilteredPosts()
  }, [])

  return (
    <HomeContainer>
      <Header />
      <Summary />
      <Search />
      <BlogCard />
    </HomeContainer>
  )
}
