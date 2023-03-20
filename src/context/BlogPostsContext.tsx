import { createContext, ReactNode, useEffect, useState } from 'react'
import { api } from '../lib/axios'

interface Post {
  number: Number
  title: String
  body: String
  updated_at: String
}

interface BlogProviderProps {
  children: ReactNode
}

interface BlogPostsContextType {
  posts: Post[]
  getData: (searchInput: String) => Promise<void>
  resetFilteredPosts: () => Promise<void>
  filteredPosts: Post[]
  setFilteredPosts: any
}

export const BlogPostsContext = createContext({} as BlogPostsContextType)

export function BlogPostsProvider({ children }: BlogProviderProps) {
  const [posts, setPosts] = useState<Post[]>([])
  const [filteredPosts, setFilteredPosts] = useState<Post[]>([])

  async function getData(searchInput?: String) {
    const query = searchInput
      ? `${searchInput}repo:vanor-cardozo/03c-ignite-github-blog`
      : 'repo:vanor-cardozo/03c-ignite-github-blog'

    const result = await api.get('/search/issues', {
      params: {
        q: query,
      },
    })
    setPosts(result.data.items)
    setFilteredPosts(result.data.items)
  }

  async function resetFilteredPosts() {
    setFilteredPosts(posts)
  }

  useEffect(() => {
    getData()
  }, [])

  return (
    <BlogPostsContext.Provider
      value={{
        posts,
        getData,
        setFilteredPosts,
        filteredPosts,
        resetFilteredPosts,
      }}
    >
      {children}
    </BlogPostsContext.Provider>
  )
}
