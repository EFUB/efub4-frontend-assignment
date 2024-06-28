import React from "react";
import styled from "styled-components";
import { useSelector, useDispatch } from "react-redux";
import { setLightMode, setDarkMode } from "../redux/reducer";

const Toggle = () => {
  // useSelector로 현재 상태 받아오기
  const lightMode = useSelector((state) => state.isLightMode);

  const dispatch = useDispatch();

  // 모드 변경
  const changeMode = (checked) => {
    if (checked) {
      // dispatch
      dispatch(setLightMode());
    } else {
      // dispatch
      dispatch(setDarkMode());
    }
  };

  return (
    <ToggleStyle>
      <input
        type="checkbox"
        id="toggle"
        hidden
        checked={lightMode}
        onChange={(e) => changeMode(e.target.checked)}
      />

      <label for="toggle" className="toggleSwitch">
        <span className="toggleButton">
          {/* 여기 useSelector로 상태 받아와서 이미지 바꾸기 */}
        </span>
      </label>
    </ToggleStyle>
  );
};

export default Toggle;

const ToggleStyle = styled.div`
  .toggleSwitch {
    width: 60px;
    height: 30px;
    display: block;
    position: relative;
    border-radius: 30px;
    background-color: #fff;
    box-shadow: 0 0 16px 3px rgba(0 0 0 / 15%);
    cursor: pointer;
  }

  /* 토글 버튼 */
  .toggleSwitch .toggleButton {
    /* 버튼은 토글보다 작아야함  */
    width: 25px;
    height: 25px;
    position: absolute;
    top: 50%;
    left: 4px;
    transform: translateY(-50%);
    border-radius: 50%;
    background: #141517;

    /* display: flex;
    align-items: center;
    justify-content: center; */
  }

  #toggle:checked ~ .toggleSwitch {
    background: white;
  }

  #toggle:checked ~ .toggleSwitch .toggleButton {
    left: calc(100% - 30px);
    background: #f6285c;
  }

  .toggleSwitch,
  .toggleButton {
    transition: all 0.2s ease-in;
  }
`;
