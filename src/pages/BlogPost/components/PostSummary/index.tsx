import {
  PostSummaryBody,
  PostSummaryContainer,
  PostSummaryDiv,
  PostSummaryFooter,
  PostSummaryHeader,
} from './styles'

import returnIcon from '../../../../assets/icons/return-icon.svg'
import linkIcon from '../../../../assets/icons/link-icon.svg'
import gitIcon from '../../../../assets/icons/github-icon.svg'
import calendarIcon from '../../../../assets/icons/calendar-icon.svg'
import commentsIcon from '../../../../assets/icons/comments-icon.svg'
import { useNavigate } from 'react-router-dom'

import { formatDate } from '../../../../utils/formatDate'

export function PostSummary({ postData }) {
  const navigate = useNavigate()

  const goHome = () => {
    navigate('/')
  }

  return (
    <PostSummaryContainer>
      <PostSummaryDiv>
        <PostSummaryHeader>
          <a onClick={() => goHome()}>
            <img src={returnIcon} alt="" /> VOLTAR
          </a>
          <a href={postData.html_url} target="_blank" rel="noreferrer">
            VER NO GITHUB <img src={linkIcon} alt="" />{' '}
          </a>
        </PostSummaryHeader>
        <PostSummaryBody>
          <h1>{postData.title}</h1>
        </PostSummaryBody>
        <PostSummaryFooter>
          <span>
            <img src={gitIcon} alt="" />
            {postData.user.login}
          </span>
          <span>
            <img src={calendarIcon} alt="" />
            {formatDate(postData.updated_at)}
          </span>
          <span>
            <img src={commentsIcon} alt="" />
            {`${postData.comments} comentários`}
          </span>
        </PostSummaryFooter>
      </PostSummaryDiv>
    </PostSummaryContainer>
  )
}
