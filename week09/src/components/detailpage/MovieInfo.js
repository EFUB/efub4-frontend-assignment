import React from "react";
import { useNavigate } from "react-router-dom";
import { styled } from "styled-components";

// 영화 정보 컴포넌트
const MovieInfo = ({ info }) => {
  const navigate = useNavigate();
  return (
    <Wrapper>
      <div>
        <Title>{info.title}</Title>
        <Info>
          <MainInfo>
            <YearBtn>{info.year}</YearBtn>
            <Text>
              {info?.genres.length >= 2 ? info.genres.join(", ") : info.genres}
            </Text>
          </MainInfo>
          <Text>{`Average Rating : ${info.rating}`}</Text>
        </Info>

        {/* 영화 소개가 있으면 추가, 없으면 기본 소개 문장 */}
        <SubText>
          {info.description_intro
            ? info.description_intro.slice(0, 150) + "..."
            : `${info.title} is the movie that...`}
        </SubText>
        <BackBtn onClick={() => navigate(-1)}>메인으로</BackBtn>
      </div>

      <MovieImage>
        <img src={info.background_image} alt={info.title} />
      </MovieImage>
    </Wrapper>
  );
};

export default MovieInfo;

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;

  @media screen and (max-width: 1000px) {
    flex-direction: column-reverse;
    gap: 16px;
  }
`;

const MainInfo = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  margin-bottom: 4px;
`;

const Info = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 8px;
`;

const Title = styled.div`
  font-size: 40px;
  font-weight: 700;
  white-space: nowrap;
`;

const YearBtn = styled.span`
  font-size: 12px;
  font-weight: 800;

  padding: 1px 5px;
  border-radius: 3px;

  background-color: var(--subgrey);
  color: var(--background);
`;

const Text = styled.div`
  font-size: 15px;
  font-weight: 500;
`;

const SubText = styled.div`
  font-size: 15px;
  font-weight: 400;
  color: var(--subgrey);

  margin-top: 32px;
  max-width: 550px;
`;

const BackBtn = styled.button`
  border: 0px;
  border-radius: 4px;

  cursor: pointer;
  font-size: 15px;
  font-weight: 500;

  background: var(--main);
  color: var(--font);
  padding: 10px 16px;

  margin-top: 24px;
`;

const MovieImage = styled.div`
  position: relative;

  img {
    max-width: 600px;
    max-height: 350px;
  }

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    background: var(--beforeShadow);
    width: 66%;
    height: 100%;
  }

  &::after {
    content: "";
    position: absolute;
    top: 33%;
    left: 0;
    background: var(--afterShadow);
    width: 100%;
    height: 66%;
  }
`;
