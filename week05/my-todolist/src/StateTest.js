import React, { useState } from "react";

const StateTest = () => {
  // 임시 state 생성
  const [tempState, setTempState] = useState(0);

  function updateTempState() {
    setTempState((prevState) => prevState + 1);
  }
  return (
    <button id="testBtn" onClick={updateTempState}>
      테스트 버튼
    </button>
  );
};

export default StateTest;
