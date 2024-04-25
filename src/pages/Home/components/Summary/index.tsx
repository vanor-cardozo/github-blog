/* eslint-disable camelcase */
import {
  SummaryAvatar,
  SummaryBody,
  SummaryContainer,
  SummaryDiv,
  SummaryFooter,
  SummaryHeader,
} from "./styles";

import gitIcon from "../../../../assets/icons/github-icon.svg";
import companyIcon from "../../../../assets/icons/company-icon.svg";
import followersIcon from "../../../../assets/icons/followers-icon.svg";
import linkIcon from "../../../../assets/icons/link-icon.svg";
import { useEffect, useState } from "react";
import { api } from "../../../../lib/axios";

interface UserInfo {
  name: string;
  bio: string;
  avatar_url: string;
  login: string;
  company: string;
  followers: number;
  html_url: string;
}

export function Summary() {
  const [userInfo, setUserInfo] = useState<UserInfo>({
    name: "",
    bio: "",
    avatar_url: "",
    login: "",
    company: "",
    followers: 0,
    html_url: "",
  });

  useEffect(() => {
    api.get("/users/vanor-cardozo").then((response) => {
      const { name, bio, avatar_url, login, company, followers, html_url } =
        response.data;
      setUserInfo({
        name,
        bio,
        avatar_url,
        login,
        company,
        followers,
        html_url,
      });
    });
  }, []);

  return (
    <SummaryContainer>
      <SummaryAvatar>
        <img src={userInfo.avatar_url} alt="" />
      </SummaryAvatar>
      <SummaryDiv>
        <SummaryHeader>
          <h1>{userInfo.name}</h1>
          <a href={userInfo.html_url} target="_blank" rel="noreferrer">
            GITHUB <img src={linkIcon} alt="" />{" "}
          </a>
        </SummaryHeader>
        <SummaryBody>
          <p>{userInfo.bio}</p>
        </SummaryBody>
        <SummaryFooter>
          <span>
            <img src={gitIcon} alt="" />
            {userInfo.login}
          </span>
          <span>
            <img src={companyIcon} alt="" />
            {userInfo.company}
          </span>
          <span>
            <img src={followersIcon} alt="" />
            {`${userInfo.followers} seguidores`}
          </span>
        </SummaryFooter>
      </SummaryDiv>
    </SummaryContainer>
  );
}
