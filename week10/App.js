import ListPage from "./pages/List";
import DetailPage from "./pages/Detail";
import WritePage from "./pages/Write";
import RegisterPage from "./pages/Register";
import HeartPage from "./pages/Heart";
import { Routes, Route, NavLink } from "react-router-dom";
import styled from "styled-components";
const Navbar = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  margin: 10px;
`;
const StyledNavLink = styled(NavLink)`
  text-decoration: none;
  color: black;
  &:hover {
    color: red;
  }
`;
function App() {
  return (
    <div>
      <Navbar>
        <StyledNavLink to="/">글 목록</StyledNavLink>
        <StyledNavLink to="/write">글쓰기</StyledNavLink>
        <StyledNavLink to="/register">로그인/회원가입</StyledNavLink>
        <StyledNavLink to="/heart">좋아요 누른 글</StyledNavLink>
      </Navbar>
      <Routes>
        <Route path="/" element={<ListPage />} />
        <Route path="/detail/:postId" element={<DetailPage />} />
        <Route path="/write" element={<WritePage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/heart" element={<HeartPage />} />
      </Routes>
    </div>
  );
}
export default App;
