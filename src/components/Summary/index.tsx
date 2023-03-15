import {
  SummaryAvatar,
  SummaryBody,
  SummaryContainer,
  SummaryDiv,
  SummaryFooter,
  SummaryHeader,
} from './styles'

import AVATAR from '../../assets/avatar.png'
import gitIcon from '../../assets/icons/github-icon.svg'
import companyIcon from '../../assets/icons/company-icon.svg'
import followersIcon from '../../assets/icons/followers-icon.svg'
import linkIcon from '../../assets/icons/link-icon.svg'

export function Summary() {
  return (
    <SummaryContainer>
      <SummaryAvatar>
        <img src={AVATAR} alt="" />
      </SummaryAvatar>
      <SummaryDiv>
        <SummaryHeader>
          <h1>Cameron Williamson</h1>
          <span>
            GITHUB
            <img src={linkIcon} alt="" />
          </span>
        </SummaryHeader>
        <SummaryBody>
          <p>
            Tristique volutpat pulvinar vel massa, pellentesque egestas. Eu
            viverra massa quam dignissim aenean malesuada suscipit. Nunc,
            volutpat pulvinar vel mass.
          </p>
        </SummaryBody>
        <SummaryFooter>
          <span>
            <img src={gitIcon} alt="" />
            cameronwill
          </span>
          <span>
            <img src={companyIcon} alt="" />
            Company
          </span>
          <span>
            <img src={followersIcon} alt="" />
            32 seguidores
          </span>
        </SummaryFooter>
      </SummaryDiv>
    </SummaryContainer>
  )
}
