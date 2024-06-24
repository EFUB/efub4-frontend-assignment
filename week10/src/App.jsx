import ListPage from "./pages/List";
import WritePage from "./pages/Write";
import DetailPage from "./pages/Detail";
import RegisterPage from "./pages/Register";
import HeartPage from "./pages/Heart";

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

const Navbar = styled.div`
	width: 100%;
	height: 50px;
	display: flex;
	justify-content: space-around;
	align-items: center;
	border-bottom: 1px solid lightgray;
	margin-bottom: 20px;

	a {
		text-decoration: none;
		color: gray;
	}

	.active {
		color: red;
		font-weight: 600;
	}
`;
