import { useSelector } from "react-redux";
import { BeatLoader } from "react-spinners";
import styled from "styled-components";

const StyledLoader = styled(BeatLoader)`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    color: ${(props) => (props.isDark ? "white" : "black")};
`;

const Loader = () => {
    const isDark = useSelector((state) => state.isDark);

    return <StyledLoader isDark={isDark} />;
};

export default Loader;
