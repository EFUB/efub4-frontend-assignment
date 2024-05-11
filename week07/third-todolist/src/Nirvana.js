import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Header2 from "./Header2";
import './Nir.css';

const Nirvana = () => {

const phrases = [
    "일단 시작하면 상위 1%~!!",
    "그래도 해야지... 우짜겠노...",
    "할 일이 이렇게 많다니! 갓생 사는 나, 완전 럭키비키잔아?!🍀",
    "죽을게 : 안죽습니다과장된비유의표현입니다걱정마세요",
    "니가 제때 할일 했잖아? 나 투두리스트 이딴거 안 썼어",
    "나 결심했다. 맘먹었어 방금. 업보 청산하기로."
];

  // 랜덤 문구 state
const [randomPhrase, setRandomPhrase] = useState("");
const navigate = useNavigate();

const handleSolveClick = () => {
    const randomIndex = Math.floor(Math.random() * phrases.length);
    setRandomPhrase(phrases[randomIndex]);
};

// 뒤로가기
const handleBackClick = () => {
    navigate(-1);
};

return (
        <div className="Nirv">
        <Header2 />
            <div className="solution">{randomPhrase && <p>{randomPhrase}</p>}</div>
            <button className="sol-btn" onClick={handleSolveClick}>조언 Please</button>
            <button className="back-btn" onClick={handleBackClick}>이전</button>
        </div>
    );
};

export default Nirvana;