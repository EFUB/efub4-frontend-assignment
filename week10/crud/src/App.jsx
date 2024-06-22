import React from 'react';
import { Routes, Route, NavLink } from 'react-router-dom';
import styled from 'styled-components';
import RegisterPage from './pages/Register';
import WritePage from './pages/Write';
import ListPage from './pages/List';
import DetailPage from './pages/Detail';
import HeartPage from './pages/Heart';

function App() {
  return (
    <Container>
      <Navbar>
        <StyledLink to="/">글 목록</StyledLink>
        <StyledLink to="/write">글쓰기</StyledLink>
        <StyledLink to="/register">로그인/회원가입</StyledLink>
        <StyledLink to="/heart">좋아요 누른 글</StyledLink>
      </Navbar>
      <Routes>
        <Route path="/" element={<ListPage />} />
        <Route path="/detail/:postId" element={<DetailPage />} />
        <Route path="/write" element={<WritePage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/heart" element={<HeartPage />} />
      </Routes>
    </Container>
  );
}

export default App;

const Container = styled.div`
  padding: 20px;
`;

const Navbar = styled.nav`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #f0f0f0;
  padding: 10px 0;
`;

const StyledLink = styled(NavLink)`
  text-decoration: none;
  color: #333;
  font-size: 16px;
  font-weight: bold;
  padding: 10px 20px;
  margin: 0 10px;
  border-radius: 5px;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #dddddd;
  }

  &.active {
    background-color: #f44336;
    color: white;
  }
`;
