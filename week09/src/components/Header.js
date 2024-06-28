import React from "react";
import { useNavigate } from "react-router-dom";
import { styled } from "styled-components";

import logo from "../assets/watcha_logo.svg";
import Toggle from "./Toggle";

// 헤더 컴포넌트
const Header = () => {
  const navigate = useNavigate();
  return (
    <Wrapper>
      <Left onClick={() => navigate("/")}>
        <img src={logo} alt="logo" className="logo" />
      </Left>
      <Right>
        <Toggle/>
        <button className="login">로그인</button>
        <button className="join">회원가입</button>
      </Right>
    </Wrapper>
  );
};

export default Header;

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 80%;
  padding: 0 10%;
  height: 60px;

  background: var(--maingrey);
`;

const Left = styled.div`
  .logo {
    width: 90px;
  }
`;

const Right = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;

  .login {
    font-size: 13px;
    border-radius: 4px;
    padding: 7px 12px;
    background: transparent;
    color: var(--font);
  }

  .login:hover {
    background: rgba(255, 255, 255, 0.1);
  }

  .join {
    font-size: 13px;
    border-radius: 4px;
    padding: 7px 12px;
    background: var(--main);
    color: var(--font);
  }
`;
