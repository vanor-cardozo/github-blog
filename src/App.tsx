import { ThemeProvider } from 'styled-components'
import { BlogPostsProvider } from './context/BlogPostsContext'
import { Home } from './pages/Home'
import { GlobalStyle } from './styles/global'
import { defaultTheme } from './styles/themes/default'

export function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <GlobalStyle />
      <BlogPostsProvider>
        <Home />
      </BlogPostsProvider>
    </ThemeProvider>
  )
}
