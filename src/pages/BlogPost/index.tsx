import { useEffect, useState } from 'react'
import { PostBody } from './components/PostBody'
import { PostSummary } from './components/PostSummary'
import { BlogPostContainer } from './styles'
import { api } from '../../lib/axios'
import { useParams } from 'react-router-dom'

export function BlogPost() {
  const [postDetail, setPostDetail] = useState({})
  const [isLoaded, setIsLoaded] = useState(false)
  const { id } = useParams()

  async function getPostById(issueID: Number) {
    const result = await api.get(
      `/repos/vanor-cardozo/03c-ignite-github-blog/issues/${issueID}`,
    )
    setPostDetail(result.data)
    setIsLoaded(true)
  }

  useEffect(() => {
    getPostById(id)
  }, [])

  return isLoaded ? (
    <BlogPostContainer>
      <PostSummary postData={postDetail} />
      <PostBody postData={postDetail} />
    </BlogPostContainer>
  ) : (
    <p>carregando...</p>
  )
}
