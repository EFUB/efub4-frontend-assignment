import styled from "styled-components";

import { useDispatch, useSelector } from "react-redux";

const ToggleBtn = () => {
    const dispatch = useDispatch();
    const isDark = useSelector((state) => state.isDark);
    const ToggleMode = (event) => {
        event.stopPropagation();
        event.preventDefault();
        dispatch({ type: "ToggleMode" });
    };

    return (
        <Container onClick={ToggleMode} isDark={isDark}>
            {isDark ? "Light" : "Dark"}
        </Container>
    );
};

export default ToggleBtn;

const Container = styled.div`
    width: 70px;
    height: 30px;
    border-radius: 20px;
    font-family: "Pretendard-ExtraLight";
    font-size: 20px;

    display: flex;
    align-items: center;
    justify-content: center;

    background-color: ${(props) => (props.isDark ? "white" : "#252525")};
    color: ${(props) => (props.isDark ? "#252525" : "white")};
`;
