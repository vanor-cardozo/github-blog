import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { BlogPostsContext } from "../../../../context/BlogPostsContext";
import { CardContainer, CardDiv } from "./styles";

import { formatDate } from "../../../../utils/formatDate";
import ReactMarkdown from "react-markdown";

export function BlogCard() {
  const { filteredPosts } = useContext(BlogPostsContext);

  const navigate = useNavigate();

  const goPost = (postId: Number) => {
    navigate(`/github-blog/blog-post/${postId}`);
  };

  return (
    <CardContainer>
      {filteredPosts.map((post) => (
        <CardDiv key={post.id} onClick={() => goPost(post.number)}>
          <span>
            <h3>{post.title}</h3>
            <p>{formatDate(post.updated_at)}</p>
          </span>
          <ReactMarkdown children={post.body} />
        </CardDiv>
      ))}
    </CardContainer>
  );
}
