import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { postLogin, postRegister, getTestJWT } from "../api/user";

const RegisterPage = () => {
	const navigate = useNavigate();

	// 로그인 API
	const [login, setLogin] = useState({ id: "", pw: "" });
	const onChangeLogin = (e) => {
		const { name, value } = e.target;
		setLogin({ ...login, [name]: value });
	};
	const Login = async (e) => {
		e.preventDefault();
		const { id, pw } = login;
		const res = await postLogin(id, pw);
		if (res.status === 201) {
			alert(`로그인 성공! ${res.data.username}님 환영합니다.`);
			navigate("/");
			window.location.reload();
		} else if (res.response.status === 400) {
			alert("아이디와 비밀번호가 맞는지 다시 확인해주세요!");
		}
	};
	const Logout = () => {
		localStorage.removeItem("efubtoken");
		alert("로그아웃 성공!");
		window.location.reload();
	};

	// 회원가입 API
	const [signup, setSignup] = useState({ id: "", pw: "", nickname: "" });
	const onChangeSignup = (e) => {
		const { name, value } = e.target;
		setSignup({ ...signup, [name]: value });
	};
	const Signup = async (e) => {
		e.preventDefault();
		const { id, pw, nickname } = signup;
		const res = await postRegister(id, pw, nickname);
		if (res.status === 201) {
			alert("회원가입 성공! 로그인을 진행해주세요.");
			setSignup({ id: "", pw: "", nickname: "" });
		} else if (res.response.status === 400) {
			alert(res.response.data.message);
		}
	};

	// JWT 테스트 API
	const isLogin = !!localStorage.getItem("efubtoken");
	const [profile, setProfile] = useState();
	const GetProfile = async () => {
		const res = await getTestJWT();
		if (res.status === 200) setProfile(res.data);
	};
	useEffect(() => {
		if (isLogin) GetProfile();
	}, []);

	return (
		<>
			<h1>로그인/회원가입 페이지</h1>
			{profile && <p>{profile.nickname + "님 안녕하세요"}</p>}
			{isLogin ? (
				<button onClick={Logout}>로그아웃</button>
			) : (
				<>
					<h2>로그인</h2>
					<form onSubmit={Login}>
						아이디
						<input
							type="text"
							value={login.id}
							name="id"
							onChange={onChangeLogin}
						/>
						비밀번호
						<input
							type="password"
							value={login.pw}
							name="pw"
							onChange={onChangeLogin}
						/>
						<button type="submit">로그인</button>
					</form>
				</>
			)}
			<h2>회원가입</h2>
			<form onSubmit={Signup}>
				아이디
				<input
					type="text"
					value={signup.id}
					name="id"
					onChange={onChangeSignup}
				/>
				비밀번호
				<input
					type="password"
					value={signup.pw}
					name="pw"
					onChange={onChangeSignup}
				/>
				닉네임
				<input
					type="text"
					value={signup.nickname}
					name="nickname"
					onChange={onChangeSignup}
				/>
				<button type="submit">회원가입</button>
			</form>
		</>
	);
};

export default RegisterPage;
