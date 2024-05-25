import React from "react";
import styled, { ThemeProvider } from "styled-components";
import { useSelector } from "react-redux";

const HeaderContainer = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 0px 5px;
  background-color: ${(props) =>
    props.theme.mode === "dark" ? "#ffffff" : "#222222"};

  position: fixed; /* Header를 항상 화면 위에 고정 */
  top: 0; /* 상단에 고정 */
  left: 0; /* 좌측에 고정 */
  width: 100%; /* 가로 전체 너비로 설정 */
  z-index: 999; /* 다른 요소 위에 표시 */
  font-family: "April16th-Life";
`;

const HeaderLeft = styled.div`
  display: flex;
  align-items: center;
  padding: 3px 10px;
`;
const Logo = styled.p`
  padding: 5px;
  margin: 0 5px;
  font-size: 26px;
  font-weight: bold;
  color: #f7bd36;
`;

const HeaderRight = styled.div`
  display: flex;
  align-items: center;
  padding: 3px 7px;
`;

const HeaderRightText = styled.p`
  padding: 5px;
  margin: 0 3px;
  margin-top: -3px;
  font-size: 13px;
`;

const SignBtn = styled.button`
  width: 76px;
  height: 36px;
  background: #f7bd36;
  color: #fff;
  border: 1px solid transparent;
  border-radius: 4px;
  padding: 5px;
  padding-bottom: 7px;
  margin: 9px 10px;
  font-size: 14px;
  margin-left: 0px;
`;

const ThemeBtn = styled.button`
  background: none;
  border: none;
  cursor: pointer;
  color: yellow;
  width: 30px;
  height: 30px;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  padding-left: 40px;
  padding-right: 10px;
  &:before {
    content: "${(props) => (props.theme.mode === "dark" ? "✨" : "🌙")}";
    font-size: 20px;
  }
`;

const Header = ({ onThemeChange }) => {
  const theme = useSelector((state) => state.themeSlicer.theme);

  return (
    <ThemeProvider theme={theme}>
      <HeaderContainer>
        <HeaderLeft>
          <Logo>JIN's THEATRE</Logo>
        </HeaderLeft>
        <HeaderRight>
          <ThemeBtn onClick={onThemeChange} />

          <HeaderRightText>로그인</HeaderRightText>
          <SignBtn>회원가입</SignBtn>
        </HeaderRight>
      </HeaderContainer>
    </ThemeProvider>
  );
};

export default Header;
