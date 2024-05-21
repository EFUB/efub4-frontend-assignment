import React, { useEffect, useState } from "react";
import styled from "styled-components";
import axios from "axios";
import Detail from "../components/Detail";
import { useParams } from "react-router-dom";

const Container = styled.div`
    display: flex;
    justify-content: center;
`;

const DetailPage = () => {
    const { id } = useParams();
    const [movie, setMovie] = useState(null);

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
        <Container>
            {movie && <Detail information={movie} />}
        </Container>
    );
};

export default DetailPage;
