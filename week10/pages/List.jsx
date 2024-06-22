import { useState, useEffect } from "react";
import { PostList } from "../api/post";
import { Link } from "react-router-dom";
import styled from "styled-components";
const Wrapper = styled.div``;
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

const List = () => {
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    const fetchPosts = async () => {
      try {
        let data = await PostList();
        if (
          data.length > 0 &&
          !isNaN(new Date(data[0].createdDate).getTime())
        ) {
          data = data.sort(
            (a, b) => new Date(b.createdDate) - new Date(a.createdDate)
          );
        } else {
          console.error("Invalid date");
        }
        setPosts(data);
      } catch (err) {
        console.log(err);
      }
    };
    fetchPosts();
  }, []);
  return (
    <Wrapper>
      <h1>게시글 목록 페이지</h1>
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
  );
};
export default List;
