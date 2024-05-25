import React, { useEffect, useState } from "react";
import styled from "styled-components";
import axios from "axios";
import Detail from "../components/Detail";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";

const Container = styled.div`
    display: flex;
    justify-content: center;
    background-color: ${({ backGroundColor }) => backGroundColor};
    color: ${({ textColor }) => textColor};
`;

const DetailPage = () => {
    const { id } = useParams();
    const [movie, setMovie] = useState(null);
    const backGroundColor = useSelector((state) => state.background.backGroundColor);
    const textColor = useSelector((state) => state.background.textColor);

    useEffect(() => {
        async function getDetail() {
                const res = await axios.get(
                    `https://yts.mx/api/v2/movie_details.json?movie_id=${id}`
                );
                setMovie(res.data.data.movie);
        }
        getDetail();
    }, [id]);

    return (
        <Container backGroundColor={backGroundColor} textColor={textColor}>
            {movie && <Detail information={movie} />}
        </Container>
    );
};

export default DetailPage;
