import { useState, useEffect } from "react";
import { GetAllPostApi } from "../api/post";
import { Link } from "react-router-dom";
import styled from "styled-components";

const List = () => {
    const [posts, setPosts] = useState(null);

    useEffect(() => {
        async function getPosts() {
            const res = await GetAllPostApi();
            setPosts(res);
        }

        getPosts();
    }, []);

    return (
        <>
            {posts
                ? posts.map((post) => (
                      <>
                          <PostContainer to={`detail/${post.postId}`}>
                              <Image src={post.image} />
                              <Title>{post.title}</Title>
                              <Nickname>{post.nickname}</Nickname>
                              <RowLine />
                          </PostContainer>
                      </>
                  ))
                : "Loading"}
        </>
    );
};

const PostContainer = styled(Link)`
    display: grid;
    height: auto;
    grid-template-columns: auto 1fr;
    grid-template-rows: auto auto 1fr auto;
    grid-template-areas:
        "image title"
        "image nickname"
        "image ."
        "line line";
    align-items: center;
    text-decoration: none;
    color: black;
    padding: 10px 10px 0 10px;
`;

const Image = styled.img`
    grid-area: image;
    width: 150px;
    height: 150px;
    object-fit: cover;
    margin-right: 10px;
`;

const Title = styled.div`
    grid-area: title;
    font-weight: bold;
    font-size: 30px;
    margin-bottom: 3px;
`;
const Nickname = styled.div`
    grid-area: nickname;
    font-size: 20px;
`;

const RowLine = styled.div`
    grid-area: line;
    border-bottom: 1px solid #11998e76;
    width: 90%;
    justify-self: center;

    margin-top: 10px;
`;

export default List;
