import React, { useState, useEffect } from "react";
import axios from "axios";
import { styled } from "styled-components";

import Header from "../components/Header";
import TotalMovies from "../components/mainpage/TotalMovies";
import RecommendMovies from "../components/mainpage/RecommendMovies";
import Loading from "../components/Loading";

const MainPage = () => {
  const [loading, setLoading] = useState(true); // 로딩 버튼
  const [movies, setMovies] = useState([]); // 영화 리스트
  const [isSelectTotal, setIsSelectTotal] = useState(false); // 탭 - 전체 선택할 경우 true

  const getMovies = async () => {
    const data = await axios.get(
      "https://yts-proxy.now.sh/list_movies.json?limit=40"
    );
    setLoading(false); // loading 중단
    setMovies(data.data.data.movies);
  };

  useEffect(() => {
    getMovies(); // 영화 api 리스트 데이터 받아오기
  }, []);

  const onBtnClick = () => {
    setIsSelectTotal(!isSelectTotal); // 탭 선택
  };

  return (
    <>
      <Header />
      <Wrapper>
        <Title>홈</Title>
        <Divider />
        {/* 추천/전체 선택할 수 있는 탭 */}
        <Tab>
          <TabButton
            className={isSelectTotal ? "" : "isClicked"}
            onClick={onBtnClick}
          >
            추천
          </TabButton>
          <TabButton
            className={isSelectTotal ? "isClicked" : ""}
            onClick={onBtnClick}
          >
            전체
          </TabButton>
        </Tab>
        {loading ? (
          <Loading />
        ) : isSelectTotal ? (
          <TotalMovies movies={movies} />
        ) : (
          <RecommendMovies movies={movies} />
        )}
      </Wrapper>
    </>
  );
};

export default MainPage;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  /* align-items: center; */

  padding: 0 10%;
  background: var(--background);
  /* min-height: 100vh; */
`;

const Title = styled.div`
  font-size: 30px;
  font-weight: 800;
  color: var(--font);
  margin-top: 50px;
`;

const Divider = styled.div`
  background-color: #1b1c1d;
  width: 100%;
  height: 1px;
  margin-top: 10px;
`;

const Tab = styled.div`
  display: flex;
  gap: 8px;
`;

const TabButton = styled.button`
  white-space: nowrap;

  font-size: 13px;
  font-weight: 500;

  padding: 8px 16px;
  margin: 24px 0;

  border-width: 2px;
  border-color: var(--subgrey);
  border-style: solid;
  border-radius: 24px;

  background: var(--background);
  color: var(--subgrey);

  &.isClicked {
    border-color: var(--subgrey);
    background: var(--font);
    color: var(--background);
  }
`;
