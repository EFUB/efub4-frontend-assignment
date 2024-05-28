import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { postRegister } from "../api/user";
import { postLogin } from "../api/user";
const RegisterPage = () => {
  const navigate = useNavigate();
  const [signup, setSignup] = useState({ id: "", pw: "", nickname: "" });
  const [signin, setSignin] = useState({ id: "", pw: "" });

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
  const onChangeSignin = (e) => {
    const { name, value } = e.target;
    setSignin({ ...signin, [name]: value });
  };

  const Signin = async (e) => {
    e.preventDefault();
    const { id, pw } = signin;
    console.log(signin);
    const res = await postLogin(id, pw);
    if (res.status === 201) {
      alert(`로그인 성공!${res.data.username}님 환영합니다.`);
      navigate("/");
      window.location.reload();
    } else if (res.response.status === 400) {
      alert(`아이디와 비밀번호가 일치하지 않습니다.`);
    }
  };
  return (
    <>
      <h1>로그인/회원가입 페이지</h1>
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
      <h2>로그인</h2>
      <form onSubmit={Signin}>
        아이디
        <input
          type="text"
          value={signin.id}
          name="id"
          onChange={onChangeSignin}
        />
        비밀번호
        <input
          type="password"
          value={signin.pw}
          name="pw"
          onChange={onChangeSignin}
        />
        <button type="submit">로그인</button>
      </form>
    </>
  );
};
export default RegisterPage;
