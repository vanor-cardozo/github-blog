import { useContext } from 'react'
import { BlogPostsContext } from '../../../../context/BlogPostsContext'
import { CardContainer, CardDiv } from './styles'

export function BlogCard() {
  const { posts } = useContext(BlogPostsContext)

  return (
    <CardContainer>
      {posts.map((post) => (
        <CardDiv key={post.id}>
          <span>
            <h3>{post.title}</h3>
            <p>{post.updated_at}</p>
          </span>
          <p>{post.body}</p>
        </CardDiv>
      ))}
    </CardContainer>
  )
}
