import React, { useState } from "react";

const StateTest = ({ tempState, setTempState }) => {
  return (
    <button id="testBtn" onClick={() => setTempState(tempState + 1)}>
      테스트 버튼
    </button>
  );
};

export default StateTest;
