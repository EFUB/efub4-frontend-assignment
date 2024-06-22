import React, { useState, useEffect } from 'react';
import { Routes, Route, NavLink, useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import RegisterPage from './pages/Register';
import WritePage from './pages/Write';
import ListPage from './pages/List';
import DetailPage from './pages/Detail';
import HeartPage from './pages/Heart';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    // 로그인 여부 확인
    const token = localStorage.getItem('efubtoken');
    if (token) {
      setIsLoggedIn(true);
    } else {
      setIsLoggedIn(false);
    }
  }, []);

  const handleLogout = () => {
    // 로그아웃 처리
    localStorage.removeItem('efubtoken');
    setIsLoggedIn(false);
    alert("로그아웃 되었습니다.")
    // 로그아웃 후 회원가입 페이지로
    navigate('/register');
  };

  const renderRoutes = () => {
    if (isLoggedIn) {
      return (
        <Routes>
          <Route path="/" element={<ListPage />} />
          <Route path="/detail/:postId" element={<DetailPage />} />
          <Route path="/write" element={<WritePage />} />
          <Route path="/heart" element={<HeartPage />} />
          <Route path="*" element={<NoMatch />} />
        </Routes>
      );
    } else {
      return (
        <Routes>
          <Route path="/register" element={<RegisterPage />} />
          <Route path="*" element={<navigate to="/register" />} />
        </Routes>
      );
    }
  };

  return (
    <Container>
      <Navbar>
        <StyledLink to="/" activeClassName="active">글 목록</StyledLink>
        {isLoggedIn && <StyledLink to="/write" activeClassName="active">글쓰기</StyledLink>}
        <StyledLink to="/register" activeClassName="active" onClick={handleLogout}>
          {isLoggedIn ? '로그아웃' : '로그인/회원가입'}
        </StyledLink>
        {isLoggedIn && <StyledLink to="/heart" activeClassName="active">좋아요 누른 글</StyledLink>}
      </Navbar>
      {renderRoutes()}
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
  color: #333333;
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

const NoMatch = () => {
  return <h1>페이지를 찾을 수 없습니다.</h1>;
};
