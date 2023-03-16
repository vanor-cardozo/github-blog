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

export function PostSummary() {
  return (
    <PostSummaryContainer>
      <PostSummaryDiv>
        <PostSummaryHeader>
          <a href="">
            <img src={returnIcon} alt="" /> VOLTAR
          </a>
          <a href="">
            VER NO GITHUB <img src={linkIcon} alt="" />{' '}
          </a>
        </PostSummaryHeader>
        <PostSummaryBody>
          <p>TITULO DO POST</p>
        </PostSummaryBody>
        <PostSummaryFooter>
          <span>
            <img src={gitIcon} alt="" />
            vanor-cardozo
          </span>
          <span>
            <img src={calendarIcon} alt="" />
            Há 1 dia
          </span>
          <span>
            <img src={commentsIcon} alt="" />5 comentários
          </span>
        </PostSummaryFooter>
      </PostSummaryDiv>
    </PostSummaryContainer>
  )
}
