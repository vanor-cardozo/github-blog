import { useEffect, useState } from "react";
import { PostBody } from "./components/PostBody";
import { PostSummary } from "./components/PostSummary";
import { BlogPostContainer } from "./styles";
import { api } from "../../lib/axios";
import { useParams } from "react-router-dom";
import { Header } from "../../components/Header";
import { Post } from "../../context/BlogPostsContext";

export function BlogPost() {
  const [postDetail, setPostDetail] = useState<Post>({
    id: "",
    number: 0,
    title: "",
    body: "",
    updated_at: "",
    html_url: "",
    user: { login: "" },
    comments: 0,
  });
  const [isLoaded, setIsLoaded] = useState(false);
  const { id } = useParams();

  async function getPostById(issueID: string) {
    const result = await api.get(
      `/repos/vanor-cardozo/github-blog/issues/${issueID}`
    );
    setPostDetail(result.data);
    setIsLoaded(true);
  }

  useEffect(() => {
    if (id) {
      getPostById(id);
    }
  }, [id]);

  return isLoaded ? (
    <BlogPostContainer>
      <Header />
      <PostSummary postData={postDetail} />
      <PostBody postData={postDetail} />
    </BlogPostContainer>
  ) : (
    <p>carregando...</p>
  );
}
