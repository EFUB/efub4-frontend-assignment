import React from "react";
import styled from "styled-components";
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import axios from "axios";
import Detail from "../components/Detail";
import { BeatLoader } from "react-spinners";

const Container = styled.div`
    display: flex;
    justify-content: center;
`;

const Loader = styled(BeatLoader)`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
`;

const DetailPage = () => {
    const { id } = useParams();
    const [movie, setMovie] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        async function getDetail() {
            try {
                const res = await axios.get(
                    `https://yts.mx/api/v2/movie_details.json?movie_id=${id}`
                );
                setMovie(res.data.data.movie);
                setLoading(false);
                console.log(movie);
            } catch (error) {
                console.log(error);
            }
        }
        getDetail();
    }, [id]);

    return (
        <Container>
            {loading ? <Loader color="#FFFFFF" /> : <Detail info={movie} />}
        </Container>
    );
};

export default DetailPage;
