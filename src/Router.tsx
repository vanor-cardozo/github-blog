import { Route, Routes } from 'react-router-dom'
import { BlogPost } from './pages/BlogPost'
import { Home } from './pages/Home'

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/blog-post" element={<BlogPost />} />
    </Routes>
  )
}
