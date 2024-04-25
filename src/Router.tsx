import { Route, Routes } from "react-router-dom";
import { BlogPost } from "./pages/BlogPost";
import { Home } from "./pages/Home";

export function Router() {
  return (
    <Routes>
      <Route path="/github-blog" element={<Home />} />
      <Route path="/github-blog/blog-post/:id" element={<BlogPost />} />
    </Routes>
  );
}
