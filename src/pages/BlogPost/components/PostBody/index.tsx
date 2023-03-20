import { PostBodyContainer } from './styles'

import ReactMarkdown from 'react-markdown'

export function PostBody({ postData }) {
  return (
    <PostBodyContainer>
      <ReactMarkdown children={postData.body} />
    </PostBodyContainer>
  )
}
