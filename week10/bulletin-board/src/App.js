import {
  BrowserRouter as Router,
  Routes,
  Route,
  NavLink,
  useNavigate,
} from "react-router-dom";
import React, { useEffect } from "react";
import styled from "styled-components";
import ListPage from "./pages/List";
import DetailPage from "./pages/Detail";
import WritePage from "./pages/Write";
import RegisterPage from "./pages/Register";
import HeartPage from "./pages/Heart";
import { isLoggedIn } from "./api/user";

function App() {
  const navigate = useNavigate();

  useEffect(() => {
    if (!isLoggedIn()) {
      navigate("/register");
    }
  }, [navigate]);

  const handleLogout = () => {
    localStorage.removeItem("efubtoken");
    navigate("/register");
  };

  const TopBar = styled.div`
    display: flex;
    flex-direction: row;

    justify-content: space-around;
    align-items: center;

    background-color: #d4d9b4;
    padding: 3vh;
  `;

  const Navbar = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    width: 100%;
    margin-left: 20px;
    margin-right: 20px;
    font-size: 20px;
    text-decoration: none;
    background-color: #d4d9b4;
  `;

  const activeStyle = {
    color: "#F2F2F2",
  };

  const navLinkStyle = ({ isActive }) => ({
    textDecoration: "none",
    color: "#a4b26b",
    ...(isActive && activeStyle),
  });

  const AppContainer = styled.div`
    background-color: #fefae1;
    min-height: 100vh;
  `;

  const LogOut = styled.button`
    border: none;
    border-radius: 5px;
    color: #f1f3e9;
    background-color: #adc289;
    cursor: pointer;
  `;

  return (
    <AppContainer>
      <TopBar>
        <Navbar>
          <NavLink to="/" style={navLinkStyle}>
            글 목록
          </NavLink>
          <NavLink to="/write" style={navLinkStyle}>
            글쓰기
          </NavLink>
          <NavLink to="/register" style={navLinkStyle}>
            로그인/회원가입
          </NavLink>
          <NavLink to="/heart" style={navLinkStyle}>
            좋아요 누른 글
          </NavLink>
          <LogOut onClick={handleLogout}>로그아웃</LogOut>
        </Navbar>{" "}
      </TopBar>
      <Routes>
        <Route path="/" element={<ListPage />} />
        <Route path="/detail/:postId" element={<DetailPage />} />
        <Route path="/write" element={<WritePage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/heart" element={<HeartPage />} />
      </Routes>
    </AppContainer>
  );
}
const AppWrapper = () => (
  <Router>
    <App />
  </Router>
);

export default AppWrapper;
