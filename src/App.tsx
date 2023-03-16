import { BrowserRouter } from 'react-router-dom'
import { ThemeProvider } from 'styled-components'
import { BlogPostsProvider } from './context/BlogPostsContext'
import { Router } from './Router'
import { GlobalStyle } from './styles/global'
import { defaultTheme } from './styles/themes/default'

export function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <BrowserRouter>
        <GlobalStyle />
        <BlogPostsProvider>
          <Router />
        </BlogPostsProvider>
      </BrowserRouter>
    </ThemeProvider>
  )
}
