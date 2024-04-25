import { Post } from "../../../../context/BlogPostsContext";
import { PostBodyContainer } from "./styles";

import ReactMarkdown from "react-markdown";

interface PostBodyProps {
  postData: Post;
}

export function PostBody({ postData }: PostBodyProps) {
  return (
    <PostBodyContainer>
      <ReactMarkdown children={postData.body} />
    </PostBodyContainer>
  );
}
