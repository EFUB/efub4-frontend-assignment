import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { postRegister, postLogin } from '../api/user';
import styled from 'styled-components';
import client from '../api';

function RegisterPage() {
    const navigate = useNavigate();

    // 회원가입 상태 관리
    const [signup, setSignup] = useState({ id: "", pw: "", nickname: "" });

    const onChangeSignup = (e) => {
        const { name, value } = e.target;
        setSignup({ ...signup, [name]: value });
    };

    const handleSignup = async (e) => {
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

    // 로그인 상태 관리
    const [login, setLogin] = useState({ id: "", pw: "" });

    const onChangeLogin = (e) => {
        const { name, value } = e.target;
        setLogin({ ...login, [name]: value });
    };

    const handleLogin = async (e) => {
        e.preventDefault();
        const { id, pw } = login;
        const res = await postLogin(id, pw);
        if (res.status === 201) {
            alert(`로그인 성공! ${res.data.username}님 환영합니다.`);
            localStorage.setItem("efubtoken", res.data.token);
            client.defaults.headers.common["Authorization"] = res.data.token; 
            navigate("/");
            window.location.reload();
        } else if (res.response.status === 400) {
            alert("아이디와 비밀번호가 맞는지 다시 확인해주세요!");
        }
    };

    // 로그아웃 처리
    const handleLogout = () => {
        localStorage.removeItem("efubtoken");
        delete client.defaults.headers.common["Authorization"];
        navigate("/register"); // 로그인 페이지로 이동
    };

    return (
        <Container>
            <h1>로그인/회원가입 페이지</h1>
            <Section>
                <h2>회원가입</h2>
                <Form onSubmit={handleSignup}>
                    <Label>아이디</Label>
                    <Input
                        type="text"
                        value={signup.id}
                        name='id'
                        onChange={onChangeSignup}
                    />
                    <Label>비밀번호</Label>
                    <Input
                        type="password"
                        value={signup.pw}
                        name='pw'
                        onChange={onChangeSignup}
                    />
                    <Label>닉네임</Label>
                    <Input
                        type="text"
                        value={signup.nickname}
                        name='nickname'
                        onChange={onChangeSignup}
                    />
                    <Button type='submit'>회원가입</Button>
                </Form>
            </Section>
            <Section>
                <h2>로그인</h2>
                <Form onSubmit={handleLogin}>
                    <Label>아이디</Label>
                    <Input
                        type="text"
                        value={login.id}
                        name='id'
                        onChange={onChangeLogin}
                    />
                    <Label>비밀번호</Label>
                    <Input
                        type="password"
                        value={login.pw}
                        name='pw'
                        onChange={onChangeLogin}
                    />
                    <Button type='submit'>로그인</Button>
                </Form>
            </Section>
            <LogoutButton onClick={handleLogout}>로그아웃</LogoutButton>
        </Container>
    );
}

export default RegisterPage;

const Container = styled.div`
    max-width: 600px;
    margin: 0 auto;
    padding: 20px;
`;

const Section = styled.div`
    margin-bottom: 20px;
`;

const Form = styled.form`
    display: flex;
    flex-direction: column;
`;

const Label = styled.label`
    margin-bottom: 5px;
    font-size: 16px;
`;

const Input = styled.input`
    margin-bottom: 10px;
    padding: 10px;
    font-size: 16px;
    border: 1px solid #ccc;
    border-radius: 5px;
`;

const Button = styled.button`
    padding: 10px 20px;
    background-color: #f44336;
    color: white;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    transition: background-color 0.3s ease;

    &:hover {
        background-color: #d32f2f;
    }
`;

const LogoutButton = styled.button`
    padding: 10px 20px;
    background-color: #ccc;
    color: #333;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    transition: background-color 0.3s ease;

    &:hover {
        background-color: #bbb;
    }
`;
