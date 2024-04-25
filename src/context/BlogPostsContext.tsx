import { createContext, ReactNode, useEffect, useState } from "react";
import { api } from "../lib/axios";

export interface Post {
  id: string;
  number: number;
  title: string;
  body: string;
  updated_at: string;
  html_url: string;
  user: {
    login: string;
  };
  comments: number;
}

interface BlogProviderProps {
  children: ReactNode;
}

interface BlogPostsContextType {
  posts: Post[];
  getData: (searchInput: string) => Promise<void>;
  resetFilteredPosts: () => Promise<void>;
  filteredPosts: Post[];
  setFilteredPosts: any;
}

export const BlogPostsContext = createContext({} as BlogPostsContextType);

export function BlogPostsProvider({ children }: BlogProviderProps) {
  const [posts, setPosts] = useState<Post[]>([]);
  const [filteredPosts, setFilteredPosts] = useState<Post[]>([]);

  async function getData(searchInput?: string) {
    const query = searchInput
      ? `${searchInput}repo:vanor-cardozo/github-blog`
      : "repo:vanor-cardozo/github-blog";

    const result = await api.get("/search/issues", {
      params: {
        q: query,
      },
    });
    setPosts(result.data.items);
    setFilteredPosts(result.data.items);
  }

  async function resetFilteredPosts() {
    setFilteredPosts(posts);
  }

  useEffect(() => {
    getData();
  }, []);

  return (
    <BlogPostsContext.Provider
      value={{
        posts,
        getData,
        setFilteredPosts,
        filteredPosts,
        resetFilteredPosts,
      }}
    >
      {children}
    </BlogPostsContext.Provider>
  );
}
