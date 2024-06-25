import RegisterPage from "./pages/Register";
import CreatePage from "./pages/Write";
import ListPage from "./pages/List";
import DetailPage from "./pages/Detail";
import { Routes, Route, NavLink } from "react-router-dom";
import styled from "styled-components";
import { useState, useEffect } from "react";
import { GetPostsApi } from "./api/post";
import { GetUserHeartApi } from "./api/heart";
import { Navigate } from "react-router-dom";

function App() {
  const [posts, setPosts] = useState(null);
  const [heartPosts, setHeartPosts] = useState();

  async function getPosts() {
    try {
      const data = await GetPostsApi();
      setPosts(data);
    } catch (err) {
      console.log(err.message);
    }
  }

  async function getHeartPosts() {
    console.log("test");
    try {
      const data = await GetUserHeartApi();
      setHeartPosts(data);
    } catch (err) {
      console.log(err.message);
    }
  }

  useEffect(() => {
    getPosts();
    getHeartPosts();
  }, []);

  return (
    <div>
      <Navbar>
        <StyledNavLink to="/posts">글 목록</StyledNavLink>
        <StyledNavLink to="/write">글쓰기</StyledNavLink>
        <StyledNavLink to="/register">로그인/회원가입</StyledNavLink>
        <StyledNavLink to="/heart" onClick={getHeartPosts}>
          좋아요 누른 글
        </StyledNavLink>
      </Navbar>
      <Routes>
        <Route path="/" element={<Navigate to="/posts" />} />
        <Route
          path="/posts"
          element={<ListPage posts={posts} setPosts={setPosts} />}
        />
        <Route
          path="/posts/:postId"
          element={<DetailPage posts={posts} setPosts={setPosts} />}
        />
        <Route path="/write" element={<CreatePage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route
          path="/heart"
          element={<ListPage posts={heartPosts} setPosts={setHeartPosts} />}
        />
      </Routes>
    </div>
  );
}

export default App;

const Navbar = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  background-color: #333;
  padding: 10px 20px;
`;

const StyledNavLink = styled(NavLink)`
  color: white;
  text-decoration: none;
  font-size: 18px;
  padding: 10px 20px;

  &.active {
    background-color: #555;
    border-radius: 4px;
  }

  &:hover {
    background-color: #444;
    border-radius: 4px;
  }
`;
