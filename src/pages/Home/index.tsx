// import { Header } from '../../components/Header'
import { BlogCard } from './components/BlogCard'
import { Search } from './components/Search'
import { Summary } from './components/Summary'
import { HomeContainer } from './styles'

export function Home() {
  return (
    <HomeContainer>
      {/* <Header /> */}
      <Summary />
      <Search />
      <BlogCard />
    </HomeContainer>
  )
}
