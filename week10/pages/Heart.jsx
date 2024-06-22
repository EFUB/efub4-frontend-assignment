import { MyHeart } from "../api/heart";
import { useState, useEffect } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
const ListItem = styled.div`
  display: flex;
  flex-direction: row;
  margin: 20px;
`;
const Title = styled.h2``;
const Image = styled.img`
  width: 100px;
  height: 100px;
  margin-right: 20px;
`;
const Wrapper = styled.div``;
const Heart = () => {
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    const myHeartPosts = async () => {
      try {
        const data = await MyHeart();
        console.log(data);
        setPosts(data);
      } catch (err) {
        console.log(err);
      }
    };
    myHeartPosts();
  }, []);
  return (
    <>
      <Wrapper>
        <h1>내가 좋아요 누른 게시글</h1>
        {posts.map((post) => (
          <Link
            to={`/detail/${post.postId}`}
            key={post.postId}
            style={{ textDecoration: "none", color: "inherit" }}
          >
            <ListItem>
              <Image src={post.image} alt={post.title}></Image>
              <Title>{post.title}</Title>
            </ListItem>
          </Link>
        ))}
      </Wrapper>
      ;
    </>
  );
};

export default Heart;
