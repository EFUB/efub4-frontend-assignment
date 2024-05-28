import RegisterPage from "./pages/Register";
import CreatePage from "./pages/Write";
import { Routes, Route, NavLink } from "react-router-dom";
import styled from "styled-components";
function App() {
  return (
    <div>
      <Navbar>
        <NavLink to="/">글 목록</NavLink>
        <NavLink to="/write">글쓰기</NavLink>
        <NavLink to="/register">로그인/회원가입</NavLink>
        <NavLink to="/heart">좋아요 누른 글</NavLink>
      </Navbar>
      <Routes>
        {/* <Route path="/" element={<ListPage />} /> */}
        {/* <Route path="/detail/:postId" element={<DetailPage />} /> */}
        <Route path="/write" element={<CreatePage />} />
        <Route path="/register" element={<RegisterPage />} />
        {/* <Route path="/heart" element={<HeartPage />} /> */}
      </Routes>
    </div>
  );
}
export default App;
const Navbar = styled.div``;
