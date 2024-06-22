import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { postRegister, postLogin } from "../api/user";
import styled from "styled-components";

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
    const res = await postLogin(id, pw);
    if (res.status === 201) {
      alert(`로그인 성공!${res.data.username}님 환영합니다.`);
      navigate("/");
      window.location.reload();
    } else if (res.response.status === 400) {
      alert("아이디와 비밀번호가 일치하지 않습니다.");
    }
  };

  return (
    <Container>
      <Title>로그인/회원가입 페이지</Title>
      <Section>
        <Subtitle>회원가입</Subtitle>
        <Form onSubmit={Signup}>
          <Label>아이디</Label>
          <Input
            type="text"
            value={signup.id}
            name="id"
            onChange={onChangeSignup}
          />
          <Label>비밀번호</Label>
          <Input
            type="password"
            value={signup.pw}
            name="pw"
            onChange={onChangeSignup}
          />
          <Label>닉네임</Label>
          <Input
            type="text"
            value={signup.nickname}
            name="nickname"
            onChange={onChangeSignup}
          />
          <Button type="submit">회원가입</Button>
        </Form>
      </Section>
      <Section>
        <Subtitle>로그인</Subtitle>
        <Form onSubmit={Signin}>
          <Label>아이디</Label>
          <Input
            type="text"
            value={signin.id}
            name="id"
            onChange={onChangeSignin}
          />
          <Label>비밀번호</Label>
          <Input
            type="password"
            value={signin.pw}
            name="pw"
            onChange={onChangeSignin}
          />
          <Button type="submit">로그인</Button>
        </Form>
      </Section>
    </Container>
  );
};

export default RegisterPage;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2em;
  padding: 20px;
  max-width: 400px;
  margin: auto;
`;

const Title = styled.h1`
  text-align: center;
`;

const Section = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1em;
`;

const Subtitle = styled.h2`
  text-align: center;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 0.5em;
`;

const Label = styled.label`
  font-weight: bold;
`;

const Input = styled.input`
  padding: 10px;
  border: 1px solid #ddd;
  border-radius: 4px;
  font-size: 16px;
`;

const Button = styled.button`
  padding: 10px 20px;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 4px;
  font-size: 16px;
  cursor: pointer;
  &:hover {
    background-color: #0056b3;
  }
`;
