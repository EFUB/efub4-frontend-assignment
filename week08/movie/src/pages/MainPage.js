import React from "react";
import styled, { ThemeProvider } from "styled-components";
import Header from "../components/Header";
import MovieList from "../components/MovieList";
import { useDispatch, useSelector } from "react-redux";
import { changeTheme } from "../slicers/themeSlicer";

const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
`;
const Blank = styled.div`
  display: flex;
  height: 60px;
`;
const MovieSet = styled.div`
  display: flex;
  padding: 0px 5px;
  height: 26px;
`;

const SetText = styled.h3`
  margin: 8px 15px 0px;
  margin-bottom: -8px;
  color: ${(props) => (props.theme.mode === "dark" ? "#f29b3e" : "#ffffff")};
`;

const MainPage = () => {
  const theme = useSelector((state) => state.themeSlicer.theme);
  const dispatch = useDispatch();

  const handleThemeChange = () => {
    dispatch(changeTheme());
  };
  return (
    <ThemeProvider theme={theme}>
      <MainContainer>
        <Header onThemeChange={handleThemeChange} />
        <Blank></Blank>
        <MovieSet>
          <SetText>오늘의 영화</SetText>
        </MovieSet>
        <MovieList className="movieList" url="" />
        <MovieSet>
          <SetText>평점이 높은 영화</SetText>
        </MovieSet>
        <MovieList className="movieList" url="?sort_by=rating" />
        <MovieSet>
          <SetText>극장판 애니메이션</SetText>
        </MovieSet>
        <MovieList className="movieList" url="?genre=Animation" />
      </MainContainer>
    </ThemeProvider>
  );
};

export default MainPage;
