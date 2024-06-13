import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { postRegister, postLogin } from "../api/user";
import styled from "styled-components";

const Register = () => {
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

    // 로그인 API
    const [login, setLogin] = useState({ id: "", pw: "" });
    const navigate = useNavigate();
    const onChangesLogin = (e) => {
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
        window.location.reload();
    };

    return (
        <Container>
            <h1>로그인/회원가입</h1>
            <h2>회원가입</h2>
            <SignupForm onSubmit={Signup}>
                아이디
                <input
                    type="text"
                    value={signup.id}
                    name="id"
                    onChange={onChangeSignup}
                    required
                />
                비밀번호
                <input
                    type="password"
                    value={signup.pw}
                    name="pw"
                    onChange={onChangeSignup}
                    required
                />
                닉네임
                <input
                    type="text"
                    value={signup.nickname}
                    name="nickname"
                    onChange={onChangeSignup}
                    required
                />
                <Button type="submit">회원가입</Button>
            </SignupForm>
            <h2>로그인</h2>
            {localStorage.getItem("efubtoken") ? (
                <Button onClick={Logout}>로그아웃</Button>
            ) : (
                <LoginForm onSubmit={Login}>
                    아이디
                    <input
                        type="text"
                        value={login.id}
                        name="id"
                        onChange={onChangesLogin}
                        required
                    />
                    비밀번호
                    <input
                        type="password"
                        value={login.pw}
                        name="pw"
                        onChange={onChangesLogin}
                        required
                    />
                    <Button type="submit">로그인</Button>
                </LoginForm>
            )}
        </Container>
    );
};

const Container = styled.div`
    padding: 0 15px;
`;

const Button = styled.button`
    width: 80px;
    font-family: "Pretendard-Regular";
`;

const SignupForm = styled.form`
    & > * {
        margin: 0 15px 0 5px;
    }
`;

const LoginForm = styled.form`
    & > * {
        margin: 0 15px 0 5px;
    }
`;

export default Register;
