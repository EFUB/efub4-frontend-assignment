import React from "react";
import { styled } from "styled-components";

import loading from "../assets/loading.gif";

// 로딩 컴포넌트
const Loading = () => { 
  return (
    <Wrapper>
      <img src={loading} alt="로딩" />
    </Wrapper>
  );
};

export default Loading;

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 100%;
  min-height: 450px;

  img {
    width: 100px;
  }
`;
