import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { postRegister, postLogin } from "../api/user";
import styled from "styled-components";

const SignIn = styled.div`
  margin-left: 2vw;
  display: flex;
  flex-direction: row;
`;

const LogIn = styled.div`
  margin-left: 2vw;
  display: flex;
  flex-direction: row;
`;
function RegisterPage() {
  // 회원가입 API
  const navigate = useNavigate();
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

  const [login, setLogin] = useState({ id: "", pw: "" });
  const onChangeLogin = (e) => {
    const { name, value } = e.target;
    setLogin({ ...login, [name]: value });
  };
  const Login = async (e) => {
    e.preventDefault();
    console.log(login);
    const { id, pw } = login;
    const res = await postLogin(id, pw);
    if (res.status === 201) {
      alert(`로그인 성공! ${res.data.username}님 환영합니다.`);
      navigate("/");
      window.location.reload();
    } else if (res.response.status === 400) {
      alert("아이디와 비밀번호가 틀려요!");
    }
  };

  return (
    <>
      <h2 style={{ marginLeft: "2vw", marginBottom: "2vh" }}>회원가입</h2>
      <form onSubmit={Signup} style={{ marginLeft: "2vw" }}>
        <SignIn>
          아이디{" "}
          <input
            type="text"
            value={signup.id}
            name="id"
            onChange={onChangeSignup}
            style={{ marginLeft: "0.5vw", marginRight: "0.5vw" }}
          />
          비밀번호
          <input
            type="password"
            value={signup.pw}
            name="pw"
            onChange={onChangeSignup}
            style={{ marginLeft: "0.5vw", marginRight: "0.5vw" }}
          />
          닉네임
          <input
            type="text"
            value={signup.nickname}
            name="nickname"
            onChange={onChangeSignup}
            style={{ marginLeft: "0.5vw" }}
          />
          <button type="submit" style={{ marginLeft: "1.5vw" }}>
            회원가입
          </button>
        </SignIn>
      </form>
      <h2 style={{ marginLeft: "2vw", marginBottom: "2vh" }}>로그인</h2>
      <form onSubmit={Login} style={{ marginLeft: "2vw" }}>
        <LogIn>
          아이디
          <input
            type="text"
            value={login.id}
            name="id"
            onChange={onChangeLogin}
            style={{ marginLeft: "0.5vw", marginRight: "0.5vw" }}
          />
          비밀번호
          <input
            type="password"
            value={login.pw}
            name="pw"
            onChange={onChangeLogin}
            style={{ marginLeft: "0.5vw" }}
          />
          <button type="submit" style={{ marginLeft: "1.5vw" }}>
            로그인
          </button>
        </LogIn>
      </form>
    </>
  );
}
export default RegisterPage;
